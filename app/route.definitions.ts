import { RouteDefinition, AsyncRoute } from '@angular/router-deprecated'


import { WelcomeComponent } from './welcome.component'


declare var System:any;


export const RouteDefinitions: RouteDefinition[] = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomeComponent,
    useAsDefault: true
  },
  new AsyncRoute({
    path: '/about',
    loader: () => System.import('app/about.component').then(m => m.AboutComponent),
    name: 'About'
  })
]