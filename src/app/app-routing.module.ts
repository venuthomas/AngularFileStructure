import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from '@layout/mainpage/mainpage.component';
import { AboutModule } from '@modules/about/about.module';
import { ContactModule } from '@modules/contact/contact.module';
import { HomeModule } from '@modules/home/home.module';


const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('@modules/home/home.module').then((m):typeof HomeModule => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('@modules/about/about.module').then((m):typeof AboutModule => m.AboutModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('@modules/contact/contact.module').then((m):typeof ContactModule => m.ContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

