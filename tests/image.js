module.exports = {
    'Right Image for Standard user' : function (browser) {
      const LoginPage = browser.page.LoginPage();

      LoginPage
        .navigate()
        .standardLogin()
        .assert.visible('.inventory_item_img #item_4_img_link img[src="/static/media/sauce-backpack-1200x1500.34e7aa42.jpg"]');
    },
    'Wrong Image for Problem user' : function (browser) {
      const LoginPage = browser.page.LoginPage();

      LoginPage
        .navigate()
        .problemUserLogin()
        .assert.visible('.inventory_item_img #item_4_img_link img[src="/static/media/sauce-backpack-1200x1500.34e7aa42.jpg"]');
    }
  };
