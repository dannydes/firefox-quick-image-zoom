var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

exports.main = function () {
    pageMod.PageMod({
        include: "*",
        contentScriptFile: data.url("zoom.js"),
        contentStyleFile: data.url("zoom.css")
    });
};