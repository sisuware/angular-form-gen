// ATTENTION!
// DO NOT MODIFY THIS FILE BECAUSE IT WAS GENERATED AUTOMATICALLY
// SO ALL YOUR CHANGES WILL BE LOST THE NEXT TIME THE FILE IS GENERATED
angular.module('app').run(['$templateCache', function($templateCache){
  $templateCache.put('app/core/navbar/navbar.ng.html', '<div class=\"navbar navbar-default\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" ng-click=\"toggleCollapsed()\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#!/\">angular-form-gen</a></div><div class=\"navbar-collapse\" ng-class=\"{ collapse: collapsed }\"><ul class=\"nav navbar-nav\"><li ng-repeat=\"item in items\" ng-class=\"{ active: item.$$_active }\" ng-if=\"isVisible(item)\"><a href=\"#!{{ item.url }}\" ng-click=\"collapse()\">{{ item.name }}</a></li></ul></div></div></div>');
}]);