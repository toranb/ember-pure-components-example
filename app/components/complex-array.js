import Ember from "ember";
import {ValidationMixin, validateEach} from "ember-cli-simple-validation/mixins/validate";

var customFunc = function(value, options, context, index) {
    var arry = context.get("model").objectAt(index);
    var radeo = arry.get("radeo");
    var tos = arry.get("tos");
    if (!radeo) {
        return false;
    }
    //option 1 requires tos be checked
    if (radeo === 1 && tos) {
        return true;
    }
    //option 2 does not require tos be checked
    return radeo === 2;
};

export default Ember.Component.extend(ValidationMixin, {
    one: validateEach("radeo", "tos", customFunc),
    two: validateEach("tos", "radeo", customFunc),
    actions: {
        save: function() {
            this.set("submitted", true);
            if(this.get("valid")) {
                console.log("complex view save invoked");
            }
        }
    }
});
