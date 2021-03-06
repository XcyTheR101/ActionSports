import { FixturePage } from './../pages/fixtures/fixture-page';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ExpandableComponent } from '../components/expandable';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { LeaguePage } from '../pages/leagues/leagues';
import { LeaguesService } from '../services/leaguesService';
import { MyApp } from './app.component';
import { ScoresheetPage } from '../pages/scoresheet/scoresheet';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StandingsPage } from '../pages/standings/standings';
import { StandingsService } from '../services/standingsService';
import { StatusBar } from '@ionic-native/status-bar';
import { VenuePage } from '../pages/venues/venue';
import { VenuesService } from '../services/venuesService';
import { MainMenuComponent } from '../components/main-menu/main-menu';
import { LeagueInformationPage } from '../pages/league-information/league-information-page';
import { ScoresheetService } from '../services/scoresheetService';
import { SocialSharing } from '@ionic-native/social-sharing';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    MainMenuComponent,
    VenuePage,
    LeaguePage,
    StandingsPage,
    ScoresheetPage,
    ExpandableComponent,
    LeagueInformationPage,
    FixturePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      // https://ionicframework.com/docs/api/config/Config/
      pageTransition: 'ios-transition',
      spinner: 'dots',
      tabsPlacement: 'top'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VenuePage,
    LeaguePage,
    StandingsPage,
    ScoresheetPage,
    LeagueInformationPage,
    FixturePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VenuesService,
    LeaguesService,
    StandingsService,
    ScoresheetService,
    SocialSharing,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
