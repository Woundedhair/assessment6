const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

//afterEach(async () => {
  //await driver.quit();
//});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("draw button displays div with id=choices", async () => {
    await driver.findElement(By.css('#draw'))
    .click();
    await driver.wait(until.elementIsVisible(By.id("choices")), 1000);
  });

  test("Add to duo button displays div with id=player-duo", async () => {
    await driver.findElement(By.css('#add-to-duo'))
    .click();
    await driver.wait(until.elementIsVisible(By.id('#player-duo')), 1000);
  });
});