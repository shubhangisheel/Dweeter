"use strict";
var protractor_1 = require('protractor');
var IotOrchardPage = (function () {
    function IotOrchardPage() {
    }
    IotOrchardPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    IotOrchardPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return IotOrchardPage;
}());
exports.IotOrchardPage = IotOrchardPage;
//# sourceMappingURL=app.po.js.map