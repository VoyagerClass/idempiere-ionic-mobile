import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LogComponent } from './log/log.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouteReuseStrategy} from '@angular/router';
import { CommonModule } from '@angular/common';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { IonicStorageModule, Storage } from '@ionic/storage'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Contacts } from '@ionic-native/contacts/ngx'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



export function tokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  declarations: [AppComponent, LogComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        //allowedDomains: [new RegExp('(173.249.60.71)(:+)([0-9]+)')],
        allowedDomains: [new RegExp('.')],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    })
    ],
    
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function(auth: AuthService) {
        return new AuthInterceptor(auth);
      },
      multi: true,
      deps: [AuthService]
   },
    StatusBar,
    SplashScreen,
    CallNumber,
    Calendar,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Contacts
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
