import { Math } from '@/main';
import { describe, it, expect } from 'vitest';

describe('Math', () => {
  it('should sum two numbers', () => {
    const sut = new Math();
    const result = sut.sum(10, 10);
    expect(result).toBe(20);
  });
});
