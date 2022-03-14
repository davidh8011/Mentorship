module.exports = {
    'Cart Number Icon' : function (browser) {
        browser
        .url('https://www.saucedemo.com/')
        .waitForElementVisible('#user-name')
        .setValue('#user-name','standard_user')
        .setValue('#password', 'secret_sauce')
        .click('#login-button')
        .waitForElementVisible('#inventory_container')
        .assert.not.elementPresent('.shopping_cart_badge')
        .click('#add-to-cart-sauce-labs-backpack')
        .assert.visible('.shopping_cart_badge')

        
        //.assert.valueEquals(getText('.shopping_cart_badge'), "1");


    }
}