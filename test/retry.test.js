import { test } from 'node:test';
import assert from 'node:assert/strict';
import { retry } from '../src/retry.js';

test('retries until completed', async () => {
  let n = 0;
  const res = await retry(async () => ({ status: ++n < 3 ? 'processing' : 'completed' }), 5, 1);
  assert.equal(res.status, 'completed');
  assert.equal(n, 3);
});
