if (Meteor.isClient) {
    var title = "Meteor Rocks";
    DocHead.setTitle(title);

    /* Google Analytics setup 
    var gaScript = 'https://www.google-analytics.com/analytics.js';
    DocHead.loadScript(gaScript, function() {
        // Google Analytics loaded
        ga('create', 'UA-XXXX-Y', 'auto');
        ga('send', 'pageview');
    });
    */

    var metaInfo = {
        name: "description",
        content: "Some parts of meteor are just out-of-the-box"
    };
    DocHead.addMeta(metaInfo);
}
