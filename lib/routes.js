FlowRouter.route('/', {
    action: function(params, queryParams) {
        Session.set('params',queryParams)
        BlazeLayout.render('mainLayout',{
            content:'addressVerify'
        });
    }
});