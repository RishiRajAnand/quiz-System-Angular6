import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SharedService } from './shared/shared.service';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './header/header.component';
import { CoreService } from './core/core-service/core.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CoreComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SharedService, CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
