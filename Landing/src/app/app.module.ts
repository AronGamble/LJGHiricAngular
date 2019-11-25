import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ExperienceModule } from './experience/experience.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';

import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/en-GB';
import { ReactiveFormsModule } from '@angular/forms';


registerLocaleData(localeUk);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordForgetComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    ExperienceModule,
    HttpClientModule,
    BrowserAnimationsModule,  // Add this only in the root module
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
