import Route from '@ember/routing/route';
import inject from "components-example-app/utilities/inject";

export default Route.extend({
  repository: inject('customer'),
  model: function(params) {
    var pk = params.customer_id;
    var repository = this.get('repository');
    return repository.find(pk);
  }
});
