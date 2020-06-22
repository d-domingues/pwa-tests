import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({ providedIn: 'root' })
export class ScraperService {
	env: string = environment.apiUrl
	links: any

	constructor(private http: HttpClient) {}

	scraper = (text: string) => {
		return this.http
			.post(this.env + '/scraper', JSON.stringify({ text }))
			.subscribe(res => {
				this.links = res
			})
	}
}
