var DateUtils = require("nativescript-date-utils").DateUtils;

describe("is24hFormat function", function () {
  it("exists", function () {
    expect(DateUtils.is24hFormat()).toBeDefined();
  });

  it("returns a promise", function () {
    expect(DateUtils.is24hFormat()).toEqual(jasmine.any(Promise));
  });

  it("the promise resolves", function (done) {
    DateUtils.is24hFormat().then(
        function (is24h) {
          expect().toBe();
          done();
        },
        function () {
          fail("Should not have worked");
        }
    )
  });
});