
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CounterComponent, FetchDataComponent, HomeComponent, StampGainTableComponent } from './components';
import { Md2DatepickerDateLocaleService } from './helpers';
import { ConfigService, LogService, StampService, UserService, AuthenticationService } from './services';
import { SortByPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    StampGainTableComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'stamp-gain-table', component: StampGainTableComponent }
    ])
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
/*
    {
      provide: MD2.DateLocale,
      useClass: Md2DatepickerDateLocaleService
    },
*/
    AuthGuard,
    AuthenticationService,
    ConfigService,
    LogService,
    StampService,
    UserService,
    SortByPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
