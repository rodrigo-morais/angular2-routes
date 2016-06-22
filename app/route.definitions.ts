import { RouteDefinition } from '@angular/router-deprecated'


import { WelcomeComponent } from './welcome.component'
import { AboutComponent } from './about.component'


export const RouteDefinitions: RouteDefinition[] = [
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
]