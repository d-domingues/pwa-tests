import { Component, OnInit } from '@angular/core'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { Platform } from '@ionic/angular'

import { routes } from './app-routing.module'

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	public selectedIndex = 0
	public appPages = routes.map(r => ({
		title: r.path,
		url: '/' + r.path
	}))

	/*
	[
		{
			title: 'Camera',
			url: '/camera',
			icon: 'camera'
		},
		{
			title: 'Tracker',
			url: '/compass',
			icon: 'compass'
		}
		{
			title: 'Outbox',
			url: '/folder/Outbox',
			icon: 'paper-plane'
		},
		{
			title: 'Favorites',
			url: '/folder/Favorites',
			icon: 'heart'
		},
		{
			title: 'Archived',
			url: '/folder/Archived',
			icon: 'archive'
		},
		{
			title: 'Trash',
			url: '/folder/Trash',
			icon: 'trash'
		},
		{
			title: 'Spam',
			url: '/folder/Spam',
			icon: 'warning'
		}
	]
	*/

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp()
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault()
			this.splashScreen.hide()
		})
	}

	ngOnInit() {
		const path = window.location.pathname.split('folder/')[1]
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex(
				page => page.title.toLowerCase() === path.toLowerCase()
			)
		}
	}
}
