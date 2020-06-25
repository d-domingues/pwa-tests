import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'carol',
		pathMatch: 'full'
	},
	{
		path: 'folder/:id',
		loadChildren: () =>
			import('./folder/folder.module').then(m => m.FolderPageModule)
	},
	{
		path: 'camera',
		loadChildren: () =>
			import('./camera/camera.module').then(m => m.CameraPageModule)
	},
	{
		path: 'compass',
		loadChildren: () =>
			import('./compass/compass.module').then(m => m.CompassPageModule)
	},
	{
		path: 'test',
		loadChildren: () => import('./test/test.module').then(m => m.TestPageModule)
	},
	{
		path: 'carol',
		loadChildren: () => import('./carol/carol.module').then(m => m.CarolPageModule)
	},
	{
		path: 'figure-games',
		loadChildren: () =>
			import('./figure-games/figure-games.module').then(m => m.FigureGamesPageModule)
	},
	{
	 	path: 'match-game',
	 	loadChildren: () => import('./match-game/match-game.module').then( m => m.MatchGamePageModule)
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
