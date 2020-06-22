import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
	selector: 'app-test',
	templateUrl: './test.page.html',
	styleUrls: ['./test.page.scss']
})
export class TestPage {
	// @ViewChild('srcImg', { static: false }) srcImg: ElementRef
	@ViewChild('canvasEl', { static: false }) canvas: ElementRef

	private baseImage = new Image()
	private context: CanvasRenderingContext2D
	private radius = 10

	ngAfterViewInit() {
		const canvasElement = this.canvas.nativeElement as HTMLCanvasElement

		this.context = canvasElement.getContext('2d')

		this.baseImage.onload = () => {
			this.context.canvas.width = this.baseImage.width
			this.context.canvas.height = this.baseImage.height

			this.context.drawImage(this.baseImage, 0, 0)
		}

		this.baseImage.src = './../../assets/img/img1.jpg'
	}

	onClick(canvas: HTMLCanvasElement) {
		const ctx = canvas.getContext('2d')
		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

		this.invertColors(imageData.data)
		ctx.putImageData(imageData, 0, 0)
	}

	// tslint:disable: no-bitwise
	invertColors(data: Uint8ClampedArray) {
		for (let i = 0; i < data.length; i += 4) {
			data[i] = data[i] ^ 255
			data[i + 1] = data[i + 1] ^ 255
			data[i + 2] = data[i + 2] ^ 255
		}
	}
	// tslint:enable: no-bitwise

	pick(canvas: HTMLCanvasElement, event: MouseEvent, radius = 5) {
		const ctx = canvas.getContext('2d')
		const xCoord = event.pageX - canvas.offsetLeft - canvas.clientLeft - radius
		const yCoord = event.pageY - canvas.offsetTop - canvas.clientTop - radius

		// const imageData = ctx.getImageData(xCoord, yCoord, radius * 2, radius * 2)

		// this.applyBrightness1(imageData.data, -10, radius)
		// ctx.putImageData(imageData, xCoord, yCoord)

		// Create a circular clipping path
		// ctx.drawImage(this.baseImage, 0, 0)
		// ctx.translate(150,  150);
		// ctx.beginPath()

		const val = 50
		ctx.arc(val, val, val, 0, Math.PI * 2)
		ctx.clip()
		ctx.drawImage(this.baseImage, -110, -75)
	}

	applyBrightness(data: Uint8ClampedArray, brightness: number, radius: number) {
		for (let i = 16, j = 2; i < data.length; i += 36, j += 2) {
			for (let k = 0; k < j; k++) {
				data[i + 4 * k] += 2.55 * brightness
				data[i + 4 * k + 1] += 2.55 * brightness
				data[i + 4 * k + 2] += 2.55 * brightness
			}
		}
	}

	applyBrightness1(data: Uint8ClampedArray, brightness: number, radius: number) {
		for (let i = 1; i < data.length; i += 4) {
			data[i] += 2.55 * brightness
			data[i + 1] += 2.55 * brightness
			data[i + 2] += 2.55 * brightness
		}
	}

	/*

	pick(canvas: HTMLCanvasElement, event: MouseEvent, radius = 5) {
		const ctx = canvas.getContext('2d')
		const xCoord = event.pageX - canvas.offsetLeft - canvas.clientLeft - radius
		const yCoord = event.pageY - canvas.offsetTop - canvas.clientTop - radius

		// const imageData = ctx.getImageData(xCoord, yCoord, radius * 2, radius * 2)

		// this.applyBrightness1(imageData.data, -10, radius)
		// ctx.putImageData(imageData, xCoord, yCoord)

		// Create a circular clipping path
		// ctx.drawImage(this.baseImage, 0, 0)
		// ctx.translate(150,  150);
		// ctx.beginPath()

		const val = 50
		ctx.arc(val, val, val, 0, Math.PI * 2)
		ctx.clip()
		ctx.drawImage(this.baseImage, -120, -120)
	}



	*/
}

