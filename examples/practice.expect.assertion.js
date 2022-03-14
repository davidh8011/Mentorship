const { client } = require("nightwatch");
const { browser } = require("protractor");

module.exports = {
    "Expect Library demo tests" : (browser) => {
        browser
        .url('https://ultimateqa.com/filling-out-forms')
       // .expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.be.equal('Submit');
      // .verify.not.visible('button[name="et_builder_submit_button"]:nth-child(1)')
       .verify.visible('button[name="et_builder_submit_button"]:nth-child(1)');
 
    },
    "Should assert form field value": (browser)  => {
        browser
        .setValue('#et_pb_contact_name_0', 'David Hoffmann')
        browser.verify.valueContains('#et_pb_contact_name_0', 'David')
    },
    "Should assert current url" : (browser) => {
        browser
        .verify.urlEquals('https://ultimateqa.com/filling-out-forms');
    }
}