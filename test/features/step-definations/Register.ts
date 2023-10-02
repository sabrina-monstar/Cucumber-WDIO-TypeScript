import { Given, Then } from "@wdio/cucumber-framework";

Given(/^open the browser and navigate to url$/, async function () {
  await browser.url("http://automationexercise.com");
  await browser.maximizeWindow();
  await browser.pause(3000);
});

Then(/^Verify that home page is visible successfully$/, async function () {
  let ele = await $(`//a[normalize-space()='Home']`);
  await ele.click();
  //await browser.debug()
  await browser.pause(5000);
});

Then(/^Click on Signup button$/, async function () {
  let logEle = await $(`a[href='/login']`);
  await logEle.click();
  await browser.pause(5000);
});

Then(/^Verify (.*) is visible$/, async function (NewText) {
  const givenText = await $(`div[class='signup-form'] h2`);
  expect(await givenText.getText()).toEqual(NewText);
  await browser.pause(5000);
});

Then(/^Enter (.*) and (.*)$/, async function (UserName, Email) {
  let uName = await $(`input[placeholder='Name']`);
  uName.setValue(UserName);
  let email = await $(`input[data-qa='signup-email']`);
  email.setValue(Email);
  let submitBtn = await $(`button[data-qa='login-button']`);
  await submitBtn.click();
  await browser.pause(5000);
});

// Then(/^Verify (.*) is visible$/, async function (HeaderText) {
//   const header = await $(`//b[normalize-space()='Enter Account Information']`);
//   expect(await header.getText()).toEqual(HeaderText);
//   await browser.pause(15000);
// });
