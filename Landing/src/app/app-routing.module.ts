import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { VipComponent } from './vip/vip.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: './pages/pages.module#PagesModule' },
  { path: 'experience', loadChildren: () => import('./experience/experience.module').then(mod => mod.ExperienceModule) },
  { path: 'secret', loadChildren: () => import('./secret/secret.module').then(mod => mod.SecretModule) },
  { path: 'training', loadChildren: () => import('./training/training.module').then(mod => mod.TrainingModule) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'password-forget', component: PasswordForgetComponent },
  { path: 'vip', component: VipComponent, canActivate: [AuthGuardService] },
  { path: '**', component: ErrorPageComponent, data: { errorMessage: 'Page not found!' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
