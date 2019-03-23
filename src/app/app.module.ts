import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogModule} from './blog/BlogModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonMaterialModules} from './common/material/CommonMaterialModules';
import {MatToolbarModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        MatToolbarModule,
        CommonMaterialModules,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BlogModule
    ],
    exports: [
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
