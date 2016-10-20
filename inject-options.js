/*

  Adds injectOptions function to jQuery objects
  Injects configurable <option> tags into specified dom objects

*/

(function($) {
  $.fn.injectOptions = function(items, settings) {
    settings= $.extend({}, $.fn.injectOptions.defaults, settings);
    return this.append(items.map(item => {
      return $("<option>", {
        value: item[settings.value],
        disabled: item[settings.disabled] ? "disabled": undefined,
        text: (typeof item === 'string') ? item : item[settings.text]
      });
    }));
  };
  $.fn.injectOptions.defaults = {
    value: "value",
    disabled: "disabled",
    text: "text"
  };
}(jQuery));

/******************
*  USAGE EXAMPLES *
*******************


//using an array of strings
var strArray = ["foo", "bar", "baz"];
$(".str-options").injectOptions(strArray);

//using an array of objects (properties match defaults)
var defArray = [
  { value: 1, text: "foo"},
  { value: 2, text: "bar", disabled: true},
  { value: 3, text: "baz"}
];
$(".def-options").injectOptions(defArray);

//using an array of objects (properties match user-defined defaults)
var userDefArray = [
  { key: 1, val: "foo"},
  { key: 2, val: "bar", off: true},
  { key: 3, val: "baz"}
];
$.fn.injectOptions.defaults.value = "key";
$.fn.injectOptions.defaults.text = "val";
$.fn.injectOptions.defaults.disabled = "off";
$(".udef-options").injectOptions(userDefArray);

//manually specifying the object properties in the settings argument
var userArray = [
  { num: 1, data: "foo"},
  { num: 2, data: "bar", inactive: true},
  { num: 3, data: "baz"}
];
$(".user-options").injectOptions(userArray, { value: "num", text: "data", disabled: "inactive"});

*/