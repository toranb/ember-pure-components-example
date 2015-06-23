import Ember from "ember";

export default Ember.Route.extend({
    beforeModel: function() {
        var store = this.get("store");
        var userinfo = JSON.parse($("#userinfo").attr('data-userinfo'));
        return store.push("user", userinfo);
    }
});
