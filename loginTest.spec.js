const {test, expect} = require('@playwright/test');

//https://rahulshettyacademy.com/loginpagePractise/

test('logintest', async ({page})=>{

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   console.log(page.title());

   //enter username 
  await page.locator("#username").fill("rahulshettyacademy");

  //enter passwordnpx 
  await page.locator("#password").fill("learning");

  //drpdown
  const dropdown = await page.locator("select.form-control");//we can use tagname.classname when classname is not unique
  dropdown.selectOption("consult")

//radio button
await page.locator(".radiotextsty").last().click();

//check wether raio button is cheked or not
console.log(await expect(page.locator(".radiotextsty").last()).toBeChecked());


//accept pop up web base pop up
await page.locator("#okayBtn").click();


 //click sign in button 
 await page.locator("#signInBtn").click();

 // print name of 1st item

 const phone =await page.locator(".card-body a").first().textContent();
 console.log(phone);
 await page.pause();


})