import registerWithContainer from "ember-cli-auto-register/register";

export function initialize() {
    var application = arguments[1] || arguments[0];
    registerWithContainer("repositories", application);
    application.inject("repositories", "store", "store:main");
}

export default {
    name: "repositories",
    after: "simple-store",
    initialize: initialize
};
