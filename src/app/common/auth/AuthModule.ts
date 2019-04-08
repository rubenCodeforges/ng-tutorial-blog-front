import {NgModule} from '@angular/core';
import {AuthResource} from './services/AuthResource';
import {AuthService} from './services/AuthService';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [],
    declarations: [],
    providers: [
        AuthResource,
        AuthService
    ],
})
export class AuthModule {
}
