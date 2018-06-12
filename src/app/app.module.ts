import { HostagesPage } from './../pages/hostages/hostages';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BanditsPage } from './../pages/bandits/bandits';
import { BanditsProvider } from '../providers/bandits/bandits';
import { LogonPage } from './../pages/logon/logon';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BanditsPage,
    LogonPage,
    HostagesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BanditsPage,
    LogonPage,
    HostagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BanditsProvider
  ]
})
export class AppModule {}
