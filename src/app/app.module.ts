import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeHeadComponent } from './anime-head/anime-head.component';
import { VideoModule } from './video/video.module';

@NgModule({
  declarations: [
    AppComponent,
    AnimeHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
