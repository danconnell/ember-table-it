import Ember from 'ember';

export default Ember.Component.extend({
  totalPages: function() {
    var totalPages = this.get('rows.content.meta.total_pages');
    if (totalPages) {
      return totalPages;
    } else {
      return 0;
    }
  }.property('rows.content'),

  totalRecords: function() {
    var totalRecords = this.get('rows.content.meta.total_records');
    if (totalRecords) {
      return totalRecords;
    } else {
      return 0;
    }
  },

  actions: {
    setPage: function(current) {
      this.sendAction('action', current);
    }
  }
});
