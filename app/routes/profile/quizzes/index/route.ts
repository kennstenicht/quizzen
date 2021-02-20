import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';

interface Params {
  page: number
  q: string
}

export default class ProfileQuizzesIndexRoute extends Route {
  // Services
  @service store!: Store;


  // Defaults
  queryParams = {
    page: {
      refreshModel: true
    },
    q: {
      refreshModel: true
    }
  }



  // Hooks
  model({ page, q }: Params) {
    return this.store.query('quiz', {
      page: {
        number: page || 1
      },
      filter: {
        search_i_cont: q
      }
    });
  }
}
