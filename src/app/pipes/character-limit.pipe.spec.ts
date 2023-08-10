import { WordLimitPipe } from './word-limit.pipe';

describe('CharacterLimitPipe', () => {
  it('create an instance', () => {
    const pipe = new WordLimitPipe();
    expect(pipe).toBeTruthy();
  });
});
