var fdApp = angular.module("fdApp");
fdApp.component("fdMainPage", {
  template: "<h1>File Downloader</h1>",
  controller: function(fdMainPageService){
    var $ctrl = this;
    $ctrl.$onInit = () => {
      $ctrl.gridConfig = fdMainPageService.getGridConfiguration();
      $ctrl.gridData = fdMainPageService.getGridData();
    };
  }
});