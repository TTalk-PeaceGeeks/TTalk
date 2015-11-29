/**
 * Created by jlian on 2015-11-28.
 */
var signUpView = Backbone.View.extend({

    el: $("#sign_up"),

    initialize: function(options)
    {

        // initialize position
        this.$el.css({display: 'none', right: '200px', top: '1200px'}, 2000);

        this.render();
    },

    render: function()
    {
        return this;
    }
}

