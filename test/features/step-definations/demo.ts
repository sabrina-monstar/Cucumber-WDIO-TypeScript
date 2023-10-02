import { Given, When } from "@wdio/cucumber-framework";

Given(/^Open the browser$/, async function () {
    await browser.url("https://www.google.com/")
    await browser.maximizeWindow()
    await browser.pause(3000)
});

Given(/^Web page is opened$/, async function () {
    await browser.url("/inputs")
    await browser.setTimeout({implicit:10000, pageLoad: 10000})
    await browser.maximizeWindow()
})

When(/^Perform web interaction$/, async function () {
    let ele = await $(`[type=number]`)
     await ele.setValue(12345)
     await browser.pause(3000)
    
})