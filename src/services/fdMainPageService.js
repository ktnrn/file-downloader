var fdApp = angular.module("fdApp");
fdApp.service("fdMainPageService", function () {
    var fdMainPageService = this;
    //This array will drive the column list on the grid.
    //You can either define your own template to customize the data reading and rendering or you can just mention the property name and it will render it as a simple text.
    var HEADERS = [{
        name: "Name",
        property: "name"
    }, {
        name: "Device",
        property: "device"
    }, {
        name: "Path",
        cellTemplate: "<path full-path='row.path'></path>"
    }, {
        name: "Status",
        cellTemplate: "<status status='row.status'></status>"
    }];
    //In the real world problem, this data should be loaded using another service which would return the promise and resolve that promise after fetching the data from backend API.
    //But for this example, I am assuming the data is already loaded.
    var DATA = [
        { name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled' },

        { name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available' },

        { name: 'uxtheme.dll', device: 'Lanniester', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available' },

        { name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled' },

        { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' }

    ];
    fdMainPageService.getGridConfiguration = () => {
        return { headers: HEADERS };
    };
    f5MainPageService.getGridData = () => {
        return DATA;
    };
});