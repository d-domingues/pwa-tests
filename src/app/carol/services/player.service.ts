import { Injectable } from '@angular/core'
import { Howl } from 'howler'

@Injectable({
	providedIn: 'root'
})
export class PlayerService {
	private player: Howl = null
	private isPlaying = false
	private activeSoundSrc: string

	private mp3AssetsPath = '../../../assets/mp3/'

	constructor() {}

	play(soundSrc: string, calbackFn?: () => void) {
		if (this.isPlaying) {
			this.player.stop()
		}

		this.player = new Howl({
			src: [soundSrc],
			onplay: () => {
				console.log('play')
				this.isPlaying = true
				this.activeSoundSrc = soundSrc
			},
			onend: () => {
				console.log('end')
				this.isPlaying = false
				calbackFn()
			}
		})

		this.player.play()
	}

	playByName(audioName: string, calbackFn?: () => void) {
		this.play(this.mp3AssetsPath + audioName, calbackFn)
	}
}
