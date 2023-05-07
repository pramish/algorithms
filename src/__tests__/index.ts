import { describe, expect, test } from '@jest/globals';

import { greet } from '../index';

describe('Greet', () => {
  test('Greet a person when a name is provided.', () => {
    const name: string = 'Pramish Luitel';
    expect(greet(name)).toBe(`Welcome ${name} 👋. Hope you're having a great day ahead.`);
  });
});
