import { Given, Then } from "@wdio/cucumber-framework";
import { browser } from "@wdio/globals";
//import { expect, $ } from "@wdio/globals";

Given(/^I open the browser and load the url (.+)$/, async function (homepageurl) {
    await browser.url(homepageurl)
    await browser.maximizeWindow()
    await browser.pause(3000)
  });

//  Then(/^I should see a header with text (.+)$/, async function (headertext) {
//     const header = await $('.heading')
//     expect(await header.getText()).toEqual(headertext)
//     await browser.pause(3000)
//   });
