/*global Site20, Backbone*/

Site20.Models = Site20.Models || {};

(function () {
    'use strict';

    Site20.Models.ApplicationModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
