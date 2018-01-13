import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

export default function(key) {
  return computed(function() {
    return getOwner(this).lookup(`repository:${key}`);
  });
};
