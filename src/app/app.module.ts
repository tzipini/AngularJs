import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

//services
import { EmployeeService} from './services/employeesService'

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 FormsModule,
HttpModule,
HttpClientModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
