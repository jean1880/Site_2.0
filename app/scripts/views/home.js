/*global Site20, Backbone, JST*/

Site20.Views = Site20.Views || {};

(function () {
    'use strict';

    Site20.Views.HomeView = Backbone.View.extend({

        template: JST['app/scripts/templates/home.ejs']

    });

})();
