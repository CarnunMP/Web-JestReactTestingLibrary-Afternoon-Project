import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  // write tests! <================================================
  it("returns null if fed no arguments", () => {
    expect(helpers.multiply()).toBe(null);
  });
  it("returns null if fed a single argument", () => {
    expect(helpers.multiply(1)).toBe(null);
  });
  it("mutiplies two numbers correctly", () => {
    expect(helpers.multiply(2,-2)).toBe(-4);
  });
  it("throws if fed non-numbers", () => {
    expect(helpers.multiply(1, "2")).toThrow();
  });
  it("can multiply three numbers", () => {
    expect(helpers.multiply(2, 3, 4)).toBe(24);
  });
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });

  // write more tests! <===========================================
  it("throws if name is a non-string", () => {
    expect(helpers.personMaker(3, 4)).toThrow();
    // Would we only need to test one exception, then?
  });

  it("throws if age is a non-number", () => {
    expect(helpers.personMaker("peter", "4")).toThrow();
  })
});
