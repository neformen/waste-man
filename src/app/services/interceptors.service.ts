import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

@Injectable()
export class InterceptorsService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let newReq = req.clone();
    if (window.location.href.includes('localhost')) {
      newReq = req.clone({
        url: `http://localhost:3000${req.url}`
      });
    }

    console.log(window.location.href);
    return next.handle(newReq);
  }

}
