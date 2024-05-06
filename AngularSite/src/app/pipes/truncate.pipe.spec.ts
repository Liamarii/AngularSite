import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Truncates the string when over the given length', () => {

    let input = 'This is a test that the concat works'

    const testCases: { input: string, length: number, expected: string }[] = [
      { input: input, length: 4, expected: 'This...' },
      { input: input, length: 50, expected: input },
      { input: input, length: 5, expected: 'This...' }
    ];
    testCases.forEach(({ input, length, expected }) => {
      const result = pipe.transform(input, length);
      expect(result).toEqual(expected);
    });
  });
});
