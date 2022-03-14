module.exports = 
{
  'Remove button - Problem User' : function (browser) {
    const LoginPage = browser.page.LoginPage()

    LoginPage
      .navigate()
      .problemUserLogin()
    browser
      .waitForElementVisible('#add-to-cart-sauce-labs-backpack')
      .click('#add-to-cart-sauce-labs-backpack')
      .waitForElementVisible('#remove-sauce-labs-backpack')
      .click('#remove-sauce-labs-backpack')
      .assert.visible('#add-to-cart-sauce-labs-backpack')
  },
  'Remove button - Standard User' : function (browser) {
    const LoginPage = browser.page.LoginPage()

    LoginPage
      .navigate()
      .standardLogin()
    browser
      .waitForElementVisible('#add-to-cart-sauce-labs-backpack')
      .click('#add-to-cart-sauce-labs-backpack')
      .waitForElementVisible('#remove-sauce-labs-backpack')
      .click('#remove-sauce-labs-backpack')
      .assert.visible('#add-to-cart-sauce-labs-backpack')
  }
}