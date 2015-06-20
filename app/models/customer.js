import { attr, Model } from "ember-cli-simple-store/model";

var Customer = Model.extend({
    name: attr()
});

export default Customer;
