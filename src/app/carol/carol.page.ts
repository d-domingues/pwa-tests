import { Component } from '@angular/core'
import { Figure, FigureServiceService } from 'src/app/carol/figure/figure.service'

@Component({
	templateUrl: './carol.page.html',
	styleUrls: ['./carol.page.scss']
})
export class CarolPage {

	figures: Figure[] = []

	constructor(private figService: FigureServiceService) {
		this.figures = this.figService.getFigures()
	}

}
