import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HOME_STATES } from './home.routes';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
  imports     : [
    UIRouterModule.forChild({
      states: HOME_STATES
    })],
  declarations: [HomeComponent],
  exports     : [HomeComponent]
})
export class HomeModule {
}
