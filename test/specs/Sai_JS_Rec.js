describe("Sai_JS_Rec", () => {
  it("tests Sai_JS_Rec", async () => {
    await browser.setWindowSize(1620, 422)
    await browser.url("https://www.google.com/")
    await expect(browser).toHaveUrl("https://www.google.com/")
    await browser.$("#APjFqb").click()
    await browser.url("https://www.google.com/")
    await expect(browser).toHaveUrl("https://www.google.com/")
    await browser.$("#APjFqb").click()
    await browser.$("#APjFqb").setValue("pavan ka")
    await expect(browser).toHaveUrl("https://www.google.com/search?q=pawan+kalyan&sxsrf=APwXEdeUjEqYbAAVdxvdOD0X-M58N5v-kw%3A1685016939083&source=hp&ei=a1FvZKXyArvi2roP1ImcmAM&iflsig=AOEireoAAAAAZG9fe7AJPFDYpo4PPKYkGbV0C2fGBV0i&gs_ssp=eJzj4tTP1Tcws8wrMzFg9OIpSCxPzFPITsypTMwDAFw6B9Q&oq=pavan+ka&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCC4QgAQQsQMQCjIKCAAQgAQQsQMQCjIKCAAQgAQQsQMQCjIKCAAQgAQQsQMQCjIKCAAQgAQQsQMQCjIHCAAQgAQQCjIKCAAQgAQQsQMQCjIKCAAQgAQQsQMQCjIHCAAQgAQQCjIHCAAQgAQQCjoNCC4QxwEQ0QMQ6gIQJzoHCCMQ6gIQJzoLCAAQigUQsQMQgwE6CwgAEIAEELEDEIMBOggILhCxAxCABDoRCC4QgAQQsQMQgwEQxwEQ0QM6CAguEIAEELEDOgsILhCABBCxAxCDAToICAAQgAQQsQM6CwguEIMBELEDEIAEOgsILhCABBDHARCvAToICAAQgAQQyQM6CAgAEIoFEJIDOgcILhCABBAKOgUILhCABDoFCAAQgAQ6EQguEIAEEMcBEK8BEJgFEJoFUPwDWMkLYKoSaAFwAHgAgAGXAogB4wuSAQUwLjQuNJgBAKABAbABCg&sclient=gws-wiz")
    await browser.$("aria/ Pawan Kalyan Wikipedia https://en.wikipedia.org › wiki › Pawan_Kalyan").click()
    await expect(browser).toHaveUrl("https://en.wikipedia.org/wiki/Pawan_Kalyan")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.url("http://www.jmeter.com/")
    await expect(browser).toHaveUrl("http://www.jmeter.com/")
  });
});
