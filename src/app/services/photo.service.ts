import { Injectable } from '@angular/core'
import {
    Camera,
    CameraPhoto,
    CameraResultType,
    CameraSource,
    Capacitor,
    Filesystem,
    FilesystemDirectory,
    Storage,
} from '@capacitor/core'
import { Platform } from '@ionic/angular'
import { bindCallback, forkJoin, from, Observable, of } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class PhotoService {
	private isDeviceHybrid: boolean
	public photos = []
	private PHOTO_STORAGE = 'photos'

	// Retrieve cached photo array data
	storedPhotos$ = from(Storage.get({ key: this.PHOTO_STORAGE })).pipe(
		map(stored => JSON.parse(stored.value) || []),
		mergeMap(
			(storedPhotos: Photo[]) =>
				this.isDeviceHybrid
					? of(storedPhotos) // If running on the mobile...
					: forkJoin(formatToBase64(storedPhotos)) // If running on the web...
		)
	)

	constructor(private platform: Platform) {
		this.isDeviceHybrid = this.platform.is('hybrid')
		this.storedPhotos$.subscribe(storedPhotos => (this.photos = storedPhotos))
	}

	public watchStore(): Observable<any> {
		// formats calback fn data as an Observable
		return bindCallback(Storage.get)({ key: this.PHOTO_STORAGE })
	}

	public async addNewToGallery() {
		// Take a photo
		const capturedPhoto = await Camera.getPhoto({
			resultType: CameraResultType.Uri, // file-based data; provides best performance
			source: CameraSource.Camera, // automatically take a new photo with the camera
			quality: 100 // highest quality (0 to 100)
		})

		const savedImageFile = await this.savePicture(capturedPhoto)

		// Add new photo to Photos array
		this.photos.unshift(savedImageFile)

		// Cache all photo data for future retrieval
		Storage.set({
			key: this.PHOTO_STORAGE,
			value: this.isDeviceHybrid
				? JSON.stringify(this.photos)
				: JSON.stringify(
						this.photos.map(p => {
							// Don't save the base64 representation of the photo data,
							// since it's already saved on the Filesystem
							const photoCopy = { ...p }
							delete photoCopy.base64

							return photoCopy
						})
				  )
		})
	}

	// Save picture to file on device
	private async savePicture(cameraPhoto: CameraPhoto) {
		// Convert photo to base64 format, required by Filesystem API to save
		const base64Data = await this.readAsBase64(cameraPhoto)

		// Write the file to the data directory
		const fileName = new Date().getTime() + '.jpeg'
		await Filesystem.writeFile({
			path: fileName,
			data: base64Data,
			directory: FilesystemDirectory.Data
		})

		// Get platform-specific photo filepaths
		return await this.getPhotoFile(cameraPhoto, fileName)
	}

	// Read camera photo into base64 format based on the platform the app is running on
	private async readAsBase64(cameraPhoto: CameraPhoto) {
		// MOBILE: "hybrid" will detect Cordova or Capacitor
		if (this.isDeviceHybrid) {
			// Read the file into base64 format
			const file = await Filesystem.readFile({
				path: cameraPhoto.path
			})

			return file.data
		}
		// WEB: Fetch the photo, read as a blob, then convert to base64 format
		const response = await fetch(cameraPhoto.webPath ? cameraPhoto.webPath : null)
		const blob = await response.blob()

		return (await this.convertBlobToBase64(blob)) as string
	}

	// Retrieve the photo metadata based on the platform the app is running on
	private async getPhotoFile(
		cameraPhoto: CameraPhoto,
		fileName: string
	): Promise<Photo> {
		if (this.isDeviceHybrid) {
			// Get the new, complete filepath of the photo saved on filesystem
			const fileUri = await Filesystem.getUri({
				directory: FilesystemDirectory.Data,
				path: fileName
			})

			// Display the new image by rewriting the 'file://' path to HTTP
			// Details: https://ionicframework.com/docs/building/webview#file-protocol
			return {
				filepath: fileUri.uri,
				webviewPath: Capacitor.convertFileSrc(fileUri.uri)
			}
		} else {
			// Use webPath to display the new image instead of base64 since it's
			// already loaded into memory
			return {
				filepath: fileName,
				webviewPath: cameraPhoto.webPath
			}
		}
	}

	// Delete picture by removing it from reference data and the filesystem
	public async deletePicture(photo: Photo, position: number) {
		// Remove this photo from the Photos reference data array
		this.photos.splice(position, 1)

		// Update photos array cache by overwriting the existing photo array
		Storage.set({
			key: this.PHOTO_STORAGE,
			value: JSON.stringify(this.photos)
		})

		// delete photo file from filesystem
		const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1)
		await Filesystem.deleteFile({
			path: filename,
			directory: FilesystemDirectory.Data
		})
	}

	convertBlobToBase64 = (blob: Blob) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onerror = reject
			reader.onload = () => {
				resolve(reader.result)
			}
			reader.readAsDataURL(blob)
		})

	async addNewToGallery1111() {
		// Take a photo
		const capturedPhoto = await Camera.getPhoto({
			resultType: CameraResultType.Uri, // file-based data; provides best performance
			source: CameraSource.Camera, // automatically take a new photo with the camera
			quality: 100 // highest quality (0 to 100)
		})

		const savedImageFile = await this.savePicture(capturedPhoto)

		// Add new photo to Photos array
		this.photos.unshift(savedImageFile)

		// Cache all photo data for future retrieval
		Storage.set({
			key: this.PHOTO_STORAGE,
			value: this.isDeviceHybrid
				? JSON.stringify(this.photos)
				: JSON.stringify(
						this.photos.map(p => {
							// Don't save the base64 representation of the photo data,
							// since it's already saved on the Filesystem
							const photoCopy = { ...p }
							delete photoCopy.base64

							return photoCopy
						})
				  )
		})
	}
}

export interface Photo {
	filepath: string
	webviewPath: string
	base64?: string
}

// PURE FN: Display the photo by reading into base64 format
function formatToBase64(storedPhotos: Photo[]) {
	return storedPhotos.map(p =>
		from(
			// Read each saved photo's data from the Filesystem
			Filesystem.readFile({
				path: p.filepath,
				directory: FilesystemDirectory.Data
			})
		).pipe(
			map(readFile => ({
				...p,
				// Web platform only: Save the photo into the base64 field
				base64: `data:image/jpeg;base64,${readFile.data}`
			}))
		)
	)
}
