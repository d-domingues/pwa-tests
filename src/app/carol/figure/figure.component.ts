import { Component, Input } from '@angular/core'
import { Figure } from 'src/app/carol/figure/figure.service'

import { PlayerService } from '../services/player.service'

@Component({
	selector: 'carol-figure',
	templateUrl: './figure.component.html',
	styleUrls: ['./figure.component.scss']
})
export class FigureComponent {
	@Input() figure: Figure
	@Input() text?: string

	constructor(private player: PlayerService) {}

	ngOnInit() {
		console.log(this.figure)
	}

	play() {
		this.player.play(this.figure.soundSrc)
	}
}
