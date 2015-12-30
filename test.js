'use strict';

import test from 'ava';
import parseDate from './lib/parseDate';

test('parseDate', t => {
  const testingLines = `
There is no spoon.
The matrix
Date: Wed Dec 30 17:23:42 2015 +0800
`;
  t.same(true, parseDate(testingLines).isValid());
});
