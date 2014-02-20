/*global Site20, Backbone, JST*/

Site20.Views = Site20.Views || {};

(function () {
    'use strict';

    Site20.Views.ApplicationView = Backbone.View.extend({

        template: JST['app/scripts/templates/application.ejs']

    });

})();
