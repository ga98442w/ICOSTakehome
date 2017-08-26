

      <div id="posts">
		<div class="postContainer">
			<ul>
				<li>id</li>
				<li>Schedule</li>
				<li>Project ID</li>
				<li>Message</li>
				<li>Network</li>
				<!--li>Key words</li-->
			</ul>
		</div>
	</div> 

var ListContainerView = Backbone.View.extend({
   tagName: "div",
   className: "postContainer",
   template:$("#ListContainerView").html(),
   
	render:function () {
		var tmpl = _.template(this.template); //tmpl is a function that takes a JSON object and returns html

		this.$el.html(tmpl(this.model.toJSON())); //this.el is what we defined in tagName. use $el to get access to jQuery html() function
		return this;
	}   
});

var ListView = Backbone.View.extend({
   el:$("#posts"),
   initialize:function(){
     this.collection = new ListItemCollection(TESTDATA);
     this.render();
   },
   render: function(){
   var that = this;
     _.each(this.collection.models, function(item){
      that.renderListItemModel(item);
     }, this);  
   },
   
   renderListItemModel:function(item){ 
     var listItemModelView = new ListContainerView({         
       model: ListItemModel
     });
     this.$el.append(listItemModelView.render().el);
   }
});

var listView = new ListView();