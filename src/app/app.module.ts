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
import {BannerComponent} from "./main/components/banner/banner.component";
import {FilterSearchComponent} from "./main/pages/filter-search/filter-search.component";
import {ApartmentComponent} from "./main/pages/apartment/apartment.component";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./core/services/data.service";
import {RComplexComponent} from "./main/pages/residential-complex/r-complex.component";
import {SmartParametrsComponent} from "./main/components/smart-parametrs/smart-parametrs.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    BannerComponent,
    FilterSearchComponent,
    ApartmentComponent,
    RComplexComponent,
    SmartParametrsComponent
 ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    DashboardModule,
    AdminModule,
    PersonalModule,
    BusinessModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers:[DataService],
  bootstrap: [AppComponent]

})
export class AppModule {
}
