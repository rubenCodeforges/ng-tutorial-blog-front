import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../../common/auth/services/AuthService';

@Injectable()
export class BlogGuard implements CanActivate {

    constructor(private readonly router: Router,
                private readonly authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const isUserAuthorized = this.authService.isAuthorized();

        if (!isUserAuthorized) {
            this.router.navigate(['login']);
        }

        return of(isUserAuthorized);
    }
}
