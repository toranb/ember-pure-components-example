import { attr, Model } from "ember-cli-simple-store/model";

var Person = Model.extend({
    radeo: attr(),
    tos: attr()
});

export default Person;
