import Ember from "ember";
import PromiseMixin from "ember-promise/mixins/promise";

export default Ember.Object.extend({
    simpleStore: Ember.inject.service(),
    find: function() {
        if(arguments.length === 0) {
            return this.findAll();
        }
        return this.findById(arguments[0]);
    },
    findById: function(pk) {
        var store = this.get('simpleStore');
        return store.find("customer", pk);
    },
    findAll: function() {
        var store = this.get('simpleStore');
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
