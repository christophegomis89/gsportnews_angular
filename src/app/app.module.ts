import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { ArticleComponent } from './article/article.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
declarations: [
AppComponent,
NavigationComponent,
CarrousselComponent,
ArticleComponent,
LoginFormComponent,
FooterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
