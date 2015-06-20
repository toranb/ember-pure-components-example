import Ember from "ember";
import PromiseMixin from "ember-promise/mixins/promise";

export default Ember.Object.extend({
    find: function() {
        var store = this.get("store");
        var all = store.find("customer");
        PromiseMixin.xhr("/api/customers").then(function(response) {
            response.forEach(function(data) {
                store.push("customer", data);
            });
            all.set('isLoaded', true);
        });
        return all;
    }
});
