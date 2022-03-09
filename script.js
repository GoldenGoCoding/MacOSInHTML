let appName = document.getElementById("appName");
let mac = document.getElementById("mac");
let windows = document.getElementsByClassName("window");
let workspce = document.getElementById("workspace");
$.getJSON('MacOS_Monterey_12.1.dmg', function(data) {
    $.each(data.items, function() {
        console.log(data.items)
    })
});