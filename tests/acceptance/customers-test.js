import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'components-example-app/tests/helpers/start-app';

var application;

var customers = [
    {id: 1, name: 'toran'},
    {id: 2, name: 'brandon'},
    {id: 3, name: 'jarrod'}
];

module('Acceptance: Customers', {
  beforeEach() {
    application = startApp();
    ajax('/api/customers', 'GET', 200, customers);
  },
  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('should redirect to customers from the root url', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/customers');
  });
});

test('should list each customer and show name and href for details', function(assert) {
  visit('/customers');
  andThen(function() {
    assert.equal(find(".customer-list-item").length, 3);
    assert.equal(find(".customer-list-item .list-name:eq(0)").val(), "toran");
    assert.equal(find(".customer-list-item .list-name:eq(1)").val(), "brandon");
    assert.equal(find(".customer-list-item .list-name:eq(2)").val(), "jarrod");
  });
});

test('clicking the details link should load up the detail component', function(assert) {
  visit('/customers');
  click(".customer-list-item .list-detail-link:eq(0)");
  andThen(function() {
    assert.equal(currentURL(), '/customers/1');
    assert.equal(find(".h2-name").text(), "toran");
    assert.equal(find(".detail-name").val(), "toran");
  });
});

test('changing the detail model will also update the original list model', function(assert) {
  visit('/customers');
  click(".customer-list-item .list-detail-link:eq(0)");
  andThen(function() {
    assert.equal(find(".detail-name").val(), "toran");
    assert.equal(find(".customer-list-item .list-name:eq(0)").val(), "toran");
  });
  fillIn(".detail-name", "wattt");
  andThen(function() {
    assert.equal(find(".detail-name").val(), "wattt");
    assert.equal(find(".customer-list-item .list-name:eq(0)").val(), "wattt");
  });
});

test('detail model requires a name with len greater than 4 chars', function(assert) {
  visit('/customers');
  click(".customer-list-item .list-detail-link:eq(0)");
  andThen(function() {
    assert.equal(find(".detail-name").val(), "toran");
    assert.equal(find(".name-validation-error").is(":hidden"), true);
  });
  fillIn(".detail-name", "no");
  andThen(function() {
    assert.equal(find(".detail-name").val(), "no");
    assert.equal(find(".name-validation-error").is(":hidden"), false);
  });
  fillIn(".detail-name", "noo");
  andThen(function() {
    assert.equal(find(".detail-name").val(), "noo");
    assert.equal(find(".name-validation-error").is(":hidden"), false);
  });
  fillIn(".detail-name", "yess");
  andThen(function() {
    assert.equal(find(".detail-name").val(), "yess");
    assert.equal(find(".name-validation-error").is(":hidden"), true);
  });
});
