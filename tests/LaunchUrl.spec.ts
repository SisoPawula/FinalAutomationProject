import{expect, test} from  '@playwright/test';

test('launch Ndosi Url', async({page})=>{
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await  expect(page).toHaveTitle('Ndosi Test Automation')

});

test('Verify Button Login', async({page})=>{
    await page.goto('*/');

    const loginbutton = page.locator('button:text("Login")');

    await loginbutton.isVisible();

})

 

 