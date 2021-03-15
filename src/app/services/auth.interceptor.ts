import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        //handle your auth error or rethrow
        console.log(err);
        if (err.status === 401 || err.status === 403) {
            //navigate /delete cookies or whatever
            this.auth.logout();
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return of(err.error.message); // or EMPTY may be appropriate here
        }
        return throwError(err);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request
        const authReq = req.clone();
        // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
        return next.handle(authReq).pipe(catchError(x=> this.handleAuthError(x))); 
    }
    }

    //in fututo invece di andare alla pagine di login quando il backend risponde 401 o 403 verrà mandato il refresh token senza bisogno di riloggare ogni volta


