// Router.route('/', {
//   name: 'home'
// });

// Router.route('/dashboard', {
//   name: 'dashboard'
// });

// Router.plugin('ensureSignedIn', {
//   only: ['dashboard']
// });

FlowRouter.route('/home', {
    subscriptions: function(params) {
     
        
    },
    action: function(params) {
        console.log("Yeah! We are on the home page");
        FlowLayout.render("appLayout", {area: "home"});
    }
});

FlowRouter.route('/dashboard', {
    subscriptions: function(params) {
        console.log("subscribe and register this subscription as 'myItems'");
        this.register('myItems', Meteor.subscribe('items'));//, params.postId
    },
    action: function(params) {
        console.log("Yeah! We are on the dashboard:");
        FlowLayout.render("appLayout", {area: "dashboard"});
    }
});

FlowRouter.route('/dashboard/:postId', {
    subscriptions: function(params) {
        console.log("subscribe and register this subscription as 'myItems'");
        this.register('myItems', Meteor.subscribe('items'), params.postId);
    },
    action: function(params) {
        console.log("Yeah! We are on the post:", params.postId);
        FlowLayout.render("appLayout", {area: "dashboard"});
    }
});