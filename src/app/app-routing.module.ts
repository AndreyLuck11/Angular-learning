import {NgModule} from '@angular/core';
import {PreloadAllModules, Router, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    (routes), {
      preloadingStrategy: PreloadAllModules
      }
    // {path: 'about', loadChildren: () => import("./about-page/about-page.module#AboutPageModule").then(m => m.AboutPageModule)}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
