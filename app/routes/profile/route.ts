import Route from '@ember/routing/route';
import Transition from '@ember/routing/-private/transition';
import { inject as service } from '@ember/service';
import Session from 'ember-simple-auth/services/session';

export default class ProfileRoute extends Route {
  // Services
  @service session!: Session;


  // Hooks
  beforeModel(transition: Transition) {
    this.session.requireAuthentication(transition, 'login');
  }
}
