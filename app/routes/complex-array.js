import Ember from "ember";
import inject from "components-example-app/utilities/inject";

export default Ember.Route.extend({
    repository: inject("people"),
    model: function() {
        var repository = this.get("repository");
        return repository.find();
    }
});
