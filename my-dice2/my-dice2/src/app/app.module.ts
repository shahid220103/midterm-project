import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputPageComponent } from './input-page/input-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPageComponent,
    ResultPageComponent,
    HeaderComponent,
    FooterComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
