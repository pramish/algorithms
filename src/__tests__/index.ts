import { describe, expect, test } from '@jest/globals';

import { greet } from '../index';

describe('Greet', () => {
  test('Greet a person when a name is provided.', () => {
    expect(greet('Pramish Luitel')).toBe(`Welcome ${name} 👋. Hope you're having a great day ahead.`);
  });
});
