import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("customers", { path: "/customers" }, function() {
        this.route("customer", { path: "/:customer_id" });
    });
});

export default Router;
