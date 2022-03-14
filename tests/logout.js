module.exports = {
    'Logout' : function (browser) {
      const LoginPage = browser.page.LoginPage();

      LoginPage
        .navigate()
        .standardLogin()
        .waitForElementVisible('#react-burger-menu-btn')
        .click('#react-burger-menu-btn')
        .waitForElementVisible('#logout_sidebar_link')
        .click('#logout_sidebar_link')
        .assert.visible('.login_wrapper')
    }
  };