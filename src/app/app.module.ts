import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SitesComponent } from './sites/sites.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


const routes: Routes =[]
{
    path:''
    component: HomeComponent
}

{
    path:'about'
    component:  AboutmeComponent
}

{
    path:'sites'
    component: SitesComponent
}

{
    path: 'contact'
    component: ContactComponent
}

@NgModule( {
    declarations: [
        AppComponent, 
        SitesComponent, 
        NavbarComponent, 
        AboutmeComponent, 
        ContactComponent],
    imports: [
        BrowserModule,
        RouterModule, 
        FlexLayoutModule, 
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule, 
        FormsModule],
    bootstrap: [AppComponent]
    
})
export class AppModule {}