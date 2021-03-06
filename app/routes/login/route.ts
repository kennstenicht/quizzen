import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Session from 'ember-simple-auth/services/session';

export default class LoginRoute extends Route {
  // Services
  @service session!: Session;


  // Hooks
  beforeModel() {
    this.session.prohibitAuthentication('profile.quizzes');
  }
}
