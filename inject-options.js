(function($) {
	$.fn.injectOptions = function(opts) {
      opts=opts.map(function(opt) {
      	if (typeof opt === 'string') return '<option>'+opt+'</option>';
        else return '<option value="'+opt.key+'">'+opt.val+'</option>';
      });
    	var optHTML = opts.reduce(function(html, opt) { return html+opt; });
  	this.each(function() {
    	$(this).html(optHTML);
    });
    return this;
  };
}(jQuery));

/*

EXAMPLE

var arr = ["foo", "bar", "baz", "faz"];
var arr2 = [
  { key: 1, val: "qux"},
  { key: 2, val: "quux"},
  { key: 3, val: "quuux"},
];

$(".foo").injectOptions(arr);
$(".qux").injectOptions(arr2);

*/