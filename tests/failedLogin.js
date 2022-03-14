module.exports = {
    'Failed Login' : function (browser) {
      const LoginPage = browser.page.LoginPage();

      LoginPage
        .navigate()
        .incorrectLogin()
        .assert.visible('.error-message-container h3[data-test="error"]');
    }
  };