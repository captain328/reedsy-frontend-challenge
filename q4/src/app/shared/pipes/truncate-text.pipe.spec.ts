import { TruncateTextPipe } from './truncate-text.pipe';

describe('TruncateTextPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('#truncateText should return original text when the length does not exceed the length parameter', () => {
    const plainText = 'test text';
    const pipe = new TruncateTextPipe();
    const result = pipe.transform(plainText, 20);
    expect(plainText).toBe(result);
  });

  it('#truncateText should return truncated text followed by "..." when the length exceeds the length parameter', () => {
    const plainText = 'test text';
    const cut = 4;
    const pipe = new TruncateTextPipe();
    const result = pipe.transform(plainText, cut);
    expect(result).toBe(`${plainText.substr(0, cut)}...`);
  });
});
