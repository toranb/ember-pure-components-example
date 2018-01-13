import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("complex-array");
  this.route("customers", { path: "/customers" }, function() {
    this.route("customer", { path: "/:customer_id" });
  });
});

export default Router;
