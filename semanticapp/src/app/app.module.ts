import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ViewsModule } from './views/views.module';
// import { ModsModule } from './mods/mods.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    // ViewsModule,
    // ModsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
