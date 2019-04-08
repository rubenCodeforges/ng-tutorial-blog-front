import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogModule} from './blog/BlogModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonMaterialModules} from './common/material/CommonMaterialModules';
import {MatToolbarModule} from '@angular/material';
import {LoginModule} from './login/LoginModule';
import {AuthModule} from './common/auth/AuthModule';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        MatToolbarModule,
        AuthModule,
        CommonMaterialModules,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LoginModule,
        BlogModule
    ],
    exports: [
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
