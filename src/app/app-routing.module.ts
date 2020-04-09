import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: '',
		redirectTo: 'camera',
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
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
