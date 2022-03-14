module.exports = {
    'Product Description Page' : function (browser) {
      const LoginPage = browser.page.LoginPage();

      LoginPage
        .navigate()
        .standardLogin()
        .waitForElementVisible('#item_4_title_link')
        .click('#item_4_title_link')
        .assert.visible('.inventory_details_img_container img[src="/static/media/sauce-backpack-1200x1500.34e7aa42.jpg"]')
        .assert.visible('.inventory_details_desc_container')
        .pause(1000);
    }
  };
