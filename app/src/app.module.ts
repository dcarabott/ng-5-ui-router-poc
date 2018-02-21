import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {APP_STATES} from './app.routes';
import {AboutModule} from './about/about.module';
import {UIRouterModule, UIView} from '@uirouter/angular';

@NgModule({
    imports: [
        BrowserModule,
        HomeModule,
        AboutModule,
        UIRouterModule.forRoot({
            states: APP_STATES,
        })
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap   : [UIView]
})

export class AppModule {
}
