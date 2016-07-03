import Ember from "ember";
import inject from "components-example-app/utilities/inject";

export default Ember.Route.extend({
    repository: inject("customer"),
    model: function(params) {
        var pk = params.customer_id;
        var repository = this.get("repository");
        return repository.find(pk);
    }
});
