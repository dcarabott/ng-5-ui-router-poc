import { Ng2StateDeclaration } from '@uirouter/angular';
import { HomeComponent } from './home.component';

export let HOME_STATES: Ng2StateDeclaration[] = [
  {
    name     : 'app.home',
    url      : 'home',
    views    : {
      'main': {component: HomeComponent}
    }
  }
];
