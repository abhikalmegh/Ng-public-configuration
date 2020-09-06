import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';

const appConfig = (config : ConfigService) =>{
  return() =>{
    return config.loadConfig();
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    {
      provide : APP_INITIALIZER,
      useFactory : appConfig,
      multi : true,
      deps : [ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
