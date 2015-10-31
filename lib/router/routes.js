FlowRouter.route(['/','/home'], {
    action: function(params) {
        // area is defined on /client/templates/layouts/appLayout.html
        BlazeLayout.render("appLayout", {area: "home"});
    }
});

var dashboardGroup = FlowRouter.group({
    prefix:"/dashboard"
});

dashboardGroup.route('/', {
    subscriptions: function(params) {
        console.log("subscribe and register this subscription as 'myItems'");
        this.register('myItems', Meteor.subscribe('items'));
    },
    action: function(params) {
        console.log("Yeah! We are on the dashboard");
        BlazeLayout.render("appLayout", {area: "dashboard"});
    }
});

dashboardGroup.route('/:postId', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    subscriptions: function(params) {
        console.log("subscribe and register this subscription as 'myItems'");
        this.register('myItems', Meteor.subscribe('items',params.postId));
    },
    action: function(params) {
        console.log("Yeah! We are on the post:", params.postId);
        BlazeLayout.render("appLayout", {area: "dashboard"});
    }
});

//Routes
AccountsTemplates.configure({
    defaultLayout: 'appLayout',
    defaultLayoutRegions: {},
    defaultContentRegion: 'area',
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,

    // sendVerificationEmail: true,
    // enforceEmailVerification: true,
    //confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: true,
    //formValidationFeedback: true,
    //homeRoutePath: '/',
    //showAddRemoveServices: false,
    //showPlaceholders: true,

    negativeValidation: true,
    positiveValidation: true,
    negativeFeedback: false,
    positiveFeedback: true,

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
});


AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');