import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaypageComponent } from './paypage/paypage.component';
import { RegisterComponent } from './register/register.component';
import { CarroGuard } from './services/carro.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'payment', component: PaypageComponent, canActivate:[CarroGuard]
  },
  {
    path: 'notFound', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
