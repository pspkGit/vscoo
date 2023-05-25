
describe("myCLS_desc", () => {


    it("tc1", async () => {
        await browser.url('https://www.google.com/')

        await $("//textarea[@id='APjFqb']").setValue('sai')
        // await $('[name="btnK"]').click()
        browser.keys('Enter')
        await browser.pause(2000)
        
    })


})