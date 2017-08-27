/*
var ListContainerView = SOCIView.extend({
	template: _.template($('#ListContainerView').html()),
	className: 'ListContainerView',
          
})
*/


	var PostView = Backbone.View.extend({	
        tagName:"div",
        className:"postContainer",
        template:$("#postTemplate").html(),

        render:function () {
            var tmpl = _.template(this.template); //tmpl is a function that takes a JSON object and returns html

            this.$el.html(tmpl(this.model.toJSON())); //this.el is what we defined in tagName. use $el to get access to jQuery html() function
            return this;
        }
    });
