/*global Site20, Backbone*/

Site20.Collections = Site20.Collections || {};

(function () {
    'use strict';

    Site20.Collections.ApplicationCollection = Backbone.Collection.extend({

        model: Site20.Models.ApplicationModel

    });

})();
