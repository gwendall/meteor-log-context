Template.logContext.events({
  "click [data-log-context]": function(e, tpl) {
    var element = $(e.currentTarget);
    var limit = Number(element.attr("data-log-context")) || 10;
    console.log("Blaze context.", {
      data: Blaze.getData(element.get(0)),
      tpls: _.map(_.range(0, limit), function(i) {
        return tpl.parent(i);
      })
    });
  }
});

Template.logContext.helpers({
  "nbParents": function() {
    return this.nbParents || 10;
  }
});
