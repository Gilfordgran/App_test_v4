import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PuzzlePage } from '../pages/puzzle/puzzle';
import { QuizzPage } from '../pages/quizz/quizz';
import { CardPage } from '../pages/card/card';
import { RelaxPage } from '../pages/relax/relax';
import { ShifumiPage } from '../pages/shifumi/shifumi';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PuzzlePage,
    QuizzPage,
    CardPage,
    RelaxPage,
    ShifumiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PuzzlePage,
    QuizzPage,
    CardPage,
    RelaxPage,
    ShifumiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}