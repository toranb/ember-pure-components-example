import Route from '@ember/routing/route';
import inject from 'components-example-app/utilities/inject';

export default Route.extend({
  repository: inject('people'),
  model: function() {
    var repository = this.get('repository');
    return repository.find();
  }
});
