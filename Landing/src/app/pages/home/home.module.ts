import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { DescriptionComponent } from '../description/description.component';
import { PricingComponent } from '../pricing/pricing.component';
import { GetstartComponent } from '../getstart/getstart.component';
import { BlogComponent } from '../blog/blog.component';
import { FeatureComponent } from '../feature/feature.component';
import { ClientComponent } from '../client/client.component';
import { MoviesComponent } from '../movies/movies.component';
import { TestiComponent } from '../testi/testi.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ParticlesModule } from 'angular-particle';
import { ExperienceModule } from '../../experience/experience.module';
import { Index1Component } from './index1/index1.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';
import { Index7Component } from './index7/index7.component';
import { Index8Component } from './index8/index8.component';
import { Index9Component } from './index9/index9.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { DetailComponent } from '../../movies/detail/detail.component';

@NgModule({
  declarations: [Index1Component, ServicesComponent, AboutComponent, DescriptionComponent, PricingComponent,
    GetstartComponent, BlogComponent, MoviesComponent, TestiComponent,
    Index2Component, Index3Component, Index4Component, ClientComponent, FeatureComponent, Index5Component, Index6Component,
    Index7Component, Index8Component, Index9Component, DetailComponent],
  imports: [
    CommonModule,
    NgxYoutubePlayerModule.forRoot(),
    HomeRoutingModule,
    ExperienceModule,
    ParticlesModule,
    MatDividerModule,
    MatInputModule,
    SharedModule,
    ReactiveFormsModule,
    DirectivesModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule  
  ]
})
export class HomeModule { }

