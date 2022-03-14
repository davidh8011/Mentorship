module.exports = {
    'Place Order' : function (browser) {
      const LoginPage = browser.page.LoginPage();

      LoginPage
        .navigate()
        .standardLogin()
        .waitForElementVisible('#add-to-cart-sauce-labs-backpack')
        .click('#add-to-cart-sauce-labs-backpack')
        .waitForElementVisible('#shopping_cart_container')
        .click('#shopping_cart_container')
        .click('#checkout')
        .waitForElementVisible('#first-name')
        .setValue('#first-name', 'David')
        .setValue('#last-name', 'Hoffmann')
        .setValue('#postal-code', '75220')
        .click('#continue')
        .waitForElementVisible('#finish')
        .click('#finish')
        .assert.visible('#checkout_complete_container')
        .click('#back-to-products')
        .assert.visible('#inventory_container')
    }
  };