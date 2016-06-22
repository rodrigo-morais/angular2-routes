import { Component } from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'


import { RouteDefinitions } from './route.definitions'
import { AboutComponent } from './about.component'


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
@RouteConfig(RouteDefinitions)
export class AppComponent {
    title: string = 'This is an Angular 2 app!'
}