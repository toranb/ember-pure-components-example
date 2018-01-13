import Application from '../../app';
import config from '../../config/environment';
import { merge } from '@ember/polyfills';
import { run, later } from '@ember/runloop';
import { registerAsyncHelper } from '@ember/test';

let unhandled = {};

function interceptAjax(hash) {
  let request = unhandled[hash.url];
  let delay = request.responseTime || 0;
  later(() => {
    hash.success(request.response);
  }, delay);
}

$.ajax = interceptAjax; // eslint-disable-line

function ajax(app, url, method, status, response, responseTime) {
  run(function() {
    unhandled[url] = {response: response, responseTime: responseTime};
  });
  return app.testHelpers.wait();
}

registerAsyncHelper('ajax', ajax);

export default function startApp(attrs) {
  let attributes = merge({}, config.APP);
  attributes = merge(attributes, attrs); // use defaults, but you can override;

  return run(() => {
    let application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
