/*

  Adds fillHbTemplate function to jQuery objects
  Manages Handlebars templates to facilitate one-time compilateion and simpler
  filling of HTML nodes with template-constructed objects

*/

(function($) {
  var templates = {};
  $.fn.fillHbTemplate = function(templateId, context, options) {
    var settings = $.extend({}, $.fn.fillHbTemplate.defaults, options);
    var template = templates[templateId];
    if (!template) {
      if (settings.logging)
        console.error("fillHbTemplate: Template not found '" + templateId + "'");
      return this.empty();
    }
    return this.html(template(context));
  };
  $.fn.fillHbTemplate.add = function(templateId, source, options) {
    var settings = $.extend({}, $.fn.fillHbTemplate.defaults, options);
    if (settings.logging && templates[templateId])
      console.warn("fillHbTemplate: Template overwritten '" + templateId + "'");
    templates[templateId] = Handlebars.compile(source);
  };
  $.fn.fillHbTemplate.defaults = {
    logging: false
  };
}(jQuery));

/******************
*  USAGE EXAMPLES *
*******************


//adding a template from an html node
$.fn.fillHbTemplate.add("template", $("#template-id").html());

//adding a text template
$.fn.fillHbTemplate.add("template", "<p id=\"{{id}}\">{{p}}</p>");

//filling an html node using a template
var data = { id: "1", p: "foo" };
$("#target").fillHbTemplate("template", data);

//turning on logging
$.fn.fillHbTemplate.defaults.logging = true;

*/