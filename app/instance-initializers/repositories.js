import CustomerRepo from 'components-example-app/repositories/customer';
import PeopleRepo from 'components-example-app/repositories/people';

export function initialize() {
  var application = arguments[1] || arguments[0];
  application.register('repository:customer', CustomerRepo);
  application.register('repository:people', PeopleRepo);
}

export default {
  name: 'injectionz',
  initialize
};
