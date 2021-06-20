import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { WorkDetailsComponent } from './work-details/work-details.component';
import { AboutUsComponent } from './about-us/about-us.component';

import {ReactiveFormsModule} from '@angular/forms'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ToastrModule } from 'ngx-toastr';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAv_0pV4QtcoLsacGgS5zf1ePW3AVA5Wo",
  authDomain: "witofficial-7e893.firebaseapp.com",
  projectId: "witofficial-7e893",
  storageBucket: "witofficial-7e893.appspot.com",
  messagingSenderId: "795388323743",
  appId: "1:795388323743:web:8da7405fc6a8bb4d43bfaa",
  measurementId: "G-R61N3DR5RB"
};


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    WorkDetailsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(firebaseConfig), // Required for everything
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule,
    ReactiveFormsModule,
    ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
