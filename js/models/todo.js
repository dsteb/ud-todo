/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		// the priorities are [0, 1, 2] => [no-priority, low-priority, high-priority]
		defaults: {
			title: '',
			completed: false,
			priority: 0
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},

		// Toggle the `priority` state of this todo item.
		nextPriority: function () {
			this.save({
				priority: (this.get('priority') + 1) % 3
			});
		}
	});
})();
