import { NgModule }       from '@angular/core';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { routing }        from './app.routing';
import { AppComponent }   from './app.component';
import { UsersComponent }   from './module/view.users';
import { HttpClient } from './service/http.client';
import { RestfulService } from './service/restful.service';
import {MockData} from './mock/mock.data';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        UsersComponent
    ],
    providers: [
        HTTP_PROVIDERS,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        HttpClient,
        RestfulService,
        MockData
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}