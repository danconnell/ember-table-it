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

  actions: {
    setPage: function(current) {
      this.sendAction('action', current);
    }
  }
});
