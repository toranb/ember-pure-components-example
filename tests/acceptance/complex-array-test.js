import Ember from 'ember';
import startApp from '../helpers/start-app';
import { test, module } from 'qunit';

var application;

var people = [
    {id: 1},
    {id: 2},
    {id: 3}
];

const RADEO_BTN_ONE_MODEL_ONE = '.radio-button-one input:eq(0)';

const RADEO_BTN_ONE_MODEL_TWO = '.radio-button-one input:eq(1)';

const RADEO_ERROR_FIELD_MODEL_ONE = '.radeo-parent-div span:eq(0)';
const RADEO_ERROR_FIELD_MODEL_TWO = '.radeo-parent-div span:eq(1)';
const RADEO_ERROR_FIELD_MODEL_THREE = '.radeo-parent-div span:eq(2)';

const TOS_CHECKBOX_MODEL_ONE = '.tos-parent-div input:eq(0)';
const TOS_CHECKBOX_MODEL_TWO = '.tos-parent-div input:eq(1)';

const RADEO_BTN_TWO_MODEL_THREE = '.radio-button-two input:eq(2)';

const TOS_ERROR_FIELD_MODEL_ONE = '.tos-parent-div span:eq(0)';
const TOS_ERROR_FIELD_MODEL_TWO = '.tos-parent-div span:eq(1)';
const TOS_ERROR_FIELD_MODEL_THREE = '.tos-parent-div span:eq(2)';

const SAVE_BUTTON = 'button.save';

module('Acceptance: Complex Array Form Test', {
    setup: function() {
        application = startApp();
        return Ember.$.fauxjax.new({
            request: {
                url: "/api/people",
                method: "GET"
            },
            response: {
                status: 200,
                content: people
            }
        });
    },
    teardown: function() {
        Ember.run(application, 'destroy');
    }
});

test('multiple models can be validated independently', function(assert) {
    visit('/complex-array');
    andThen(function() {
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), true);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), true);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), true);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), true);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), true);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), true);
    });
    click(SAVE_BUTTON);
    andThen(function() {
        assert.equal(currentURL(), '/complex-array');
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), false);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), false);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), false);
    });
    click(RADEO_BTN_ONE_MODEL_ONE);
    andThen(function() {
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), false);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), false);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), false);
    });
    click(TOS_CHECKBOX_MODEL_ONE);
    andThen(function() {
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), true);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), true);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), false);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), false);
    });
    click(RADEO_BTN_ONE_MODEL_TWO);
    click(SAVE_BUTTON);
    andThen(function() {
        assert.equal(currentURL(), '/complex-array');
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), true);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), true);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), false);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), false);
    });
    click(TOS_CHECKBOX_MODEL_TWO);
    andThen(function() {
        assert.equal(currentURL(), '/complex-array');
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), true);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), true);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), true);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), true);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), false);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), false);
    });
    click(RADEO_BTN_TWO_MODEL_THREE);
    andThen(function() {
        assert.equal(currentURL(), '/complex-array');
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), true);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_ONE).hasClass('hidden'), true);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), true);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_TWO).hasClass('hidden'), true);
        assert.equal(find(RADEO_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), true);
        assert.equal(find(TOS_ERROR_FIELD_MODEL_THREE).hasClass('hidden'), true);
    });
});
