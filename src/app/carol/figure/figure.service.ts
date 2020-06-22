import { Injectable } from '@angular/core'

const figures: Figure[] = [
	{
		id: 1,
		name: 'Papá',
		color: 'linear-gradient(45deg, transparent, blue)',
		src: '../../../assets/img/papa.png',
		soundSrc: '../../../assets/mp3/papa.mp3'
	},
	{
		id: 2,
		name: 'Mamã',
		color: 'linear-gradient(45deg, transparent, yellow)',
		src: '../../../assets/img/mama.png',
		soundSrc: '../../../assets/mp3/mama.mp3'
	},
	{
		id: 3,
		name: 'Tio',
		color: 'linear-gradient(45deg, transparent, green)',
		src: '../../../assets/img/tio.png',
		soundSrc: '../../../assets/mp3/tio.mp3'
	},
	{
		id: 4,
		name: 'Vovó',
		color: 'linear-gradient(45deg, transparent, lightskyblue)',
		src: '../../../assets/img/vovo.png',
		soundSrc: '../../../assets/mp3/vovo.mp3'
	}
]

@Injectable()
export class FigureService {
	constructor() {}

	getFigures() {
		return figures
	}

	getShuffleFigures() {
		return figures.concat().sort(() => Math.random() - 0.5)
	}
}

export interface Figure {
	id: number
	name: string
	color: string
	src: string
	soundSrc: string
}
