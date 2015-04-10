Template._header.events({
	'click a[data-action=logout]' : function(e) {alert(1);
		e.preventDefault();
		AccountsTemplates.logout();
	}
});