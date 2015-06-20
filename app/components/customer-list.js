import Ember from "ember";
import {ValidationMixin, validateEach} from "ember-cli-simple-validation/mixins/validate";

var isLegit = function(name) {
    return name && name.length > 3;
};

export default Ember.Component.extend(ValidationMixin, {
    tagName: "ul",
    name: validateEach("name", isLegit),
    actions: {
        saveAll: function() {
            this.set("submitted", true);
            if(this.get("valid")) {
                console.log("list view save invoked");
            }
        }
    }
});
