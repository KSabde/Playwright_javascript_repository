const {test} = require('@playwright/test');

test.only('e2e flow' ,async({browser})=>{
        
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://www.amazon.in/");
        const title = await page.title();

        
        //print title of page
        await console.log("we are on" + title + "page");
       const navDropdown =  await page.locator("select#searchDropdownBox");
        await navDropdown.selectOption("search-alias=stripbooks");
       
       
        await page.locator("#twotabsearchtextbox").fill("marathi literature");
        await page.locator("#nav-search-submit-button").click();

      //console.log(await page.locator("#r10e8zrnc0hf8x2l466rhrdl60w").textContent()) ;
      
      //promise execute set of step parallely
      const [page2] = await Promise.all([
        
        context.waitForEvent('page'),
        page.locator("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] h2[class='a-size-mini a-spacing-none a-color-base s-line-clamp-2'] span:nth-child(1)").click(),
        console.log(page2.title())
    ]);
        
      
      


      

})