import { Component } from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { WelcomeComponent } from './welcome.component';
import { AboutComponent } from './about.component';


@Component({
    selector: 'my-app',
    template: `<h1>{{ title }}</h1>
               <a [routerLink]="['Welcome']">Welcome</a>
               <a [routerLink]="['About']">About</a>
               <router-outlet></router-outlet>
              `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomeComponent,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  }
])
export class AppComponent {
    title: string = 'This is an Angular 2 app!'
}