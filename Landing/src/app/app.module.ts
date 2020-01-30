import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ExperienceModule } from './experience/experience.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';

import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/en-GB';
import { VipComponent } from './vip/vip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './helpers/jwtinterceptor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ErrorPageComponent } from './error-page/error-page.component';

registerLocaleData(localeUk);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordForgetComponent,
    VipComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    ExperienceModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    BrowserAnimationsModule,  // Add this only in the root module
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
