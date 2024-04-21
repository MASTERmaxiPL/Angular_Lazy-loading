import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = 
  [
    { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) }, 
    { path: 'date', loadChildren: () => import('./date/date.module').then(m => m.DateModule) },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
  { path: 'data/other1', loadChildren: () => import('./other1/other1.module').then(m => m.Other1Module) },
  { path: 'data/other2', loadChildren: () => import('./other2/other2.module').then(m => m.Other2Module) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
