import Ember from "ember";
import {ValidationMixin, validate} from "ember-cli-simple-validation/mixins/validate";

var isLegit = function(name) {
    return name && name.length > 3;
};

export default Ember.Component.extend(ValidationMixin, {
    tagName: "span",
    nameValidation: validate("model.name", isLegit),
    actions: {
        save: function() {
            this.set("submitted", true);
            if(this.get("valid")) {
                console.log("detail view save invoked");
            }
        }
    }
});
