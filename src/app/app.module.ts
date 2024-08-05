import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./main/pages/home/home.component";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./main/components/header/header.component";
import {FooterComponent} from "./main/components/footer/footer.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {DashboardModule} from "./features/dashboard/dashboard.module"
import {ContainerComponent} from "./main/components/container/container.component";
import {AdminModule} from "./features/admin/admin.module";
import {PersonalModule} from "./features/personal-profile/personal.module";
import {BusinessModule} from "./features/business-profile/business.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "./app.routes";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent
 ],
  imports: [
    BrowserModule,
    CommonModule,
    DashboardModule,
    AdminModule,
    PersonalModule,
    BusinessModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
