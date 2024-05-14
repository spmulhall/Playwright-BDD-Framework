import { Given, When, Then, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Given('today\'s date is {string}', async (date: string) => {
});

Given('there are no matches scheduled for today', async () => {
});

When('I request to see the teams playing today', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://www.bbc.co.uk/sport/football/scores-fixtures');
});

Then('the system should display the list of teams', async () => {
});

Then('there should be at least one team playing today', async () => {
});

Then('the system should display a message indicating no matches today', async () => {
});

AfterAll(async () => {
  await browser.close();
});