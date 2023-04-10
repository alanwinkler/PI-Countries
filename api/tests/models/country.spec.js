const { Country, sequelize } = require("../../src/db.js");
const { expect } = require("chai");

describe("Country model", () => {
  before(() =>
    sequelize.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Country.create({ name: "Argentina" });
      });
      it("should throw an error if flag is null", (done) => {
        Country.create({})
          .then(() => done(new Error("it requires a flag")))
          .catch(() => done());
      });
      it("should throw an error if capital is null", (done) => {
        Country.create({})
          .then(() => done(new Error("it requires a capital")))
          .catch(() => done());
      });
      it("should work when its a valid capital", () => {
        Country.create({ capital: "Buenos Aires" });
      });
      it("should throw an error if population is null", (done) => {
        Country.create({})
          .then(() => done(new Error("it requires a capital")))
          .catch(() => done());
      });
    });
  });
});
