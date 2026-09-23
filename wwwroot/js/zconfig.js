let IsDemoUser = 0;
let IsAddress = 1;
var DemoUserAccountLockAll = function () {
    if (IsDemoUser == 1) {
        SwalSimpleAlert("You are not allowed to change demo user info", "warning");
        return IsDemoUser;
    }
    else {
        return IsDemoUser;
    }
}

var SetHeaderElements = function (ElementName) {
    $('#' + ElementName).empty();
}

var SetLoginInfo = function (divName) {
    if (IsAddress == 1) {
        var _GetLoginInfoElement = GetLoginInfoElement();
        $('#' + divName).empty().append(_GetLoginInfoElement);
    }
}

var SetFooterElements = function (divName) {
    if (IsAddress == 1) {
        var _CopyrightElement = CopyrightElement();
        $('#' + divName).empty().append(_CopyrightElement);
    }
}

var GetContactDetails = function () {
    return '';
}

var CopyrightElement = function () {
    var elements = '';
    elements += '<hr /><strong>Copyright &copy; 2024-2026 '
        + '<a href="https://github.com/Tannu-Priya24/Complaint-management.git" target="_blank">Auto Center</a>. </strong>'
        + 'All rights reserved.';
    return elements;
}

var CopyToClipboard = function (Element) {
    var _Element = $('#' + Element.id).html();
    navigator.clipboard.writeText(_Element);
    toastr.success('Address copy to clipboard, successfully.');
}


var GetLoginInfoElement = function () {
    var elements = '';
    elements += ''
        + '<h6 class="ms-1">Login Info</h6>'
        + '<table border="1">'
        + '<thead><tr><th>Email/Password</th><th></th></tr></thead>'
        + '<tbody><tr>'
        + '<td><label id="lblEmail">admin@gmail.com</label>/<label id="lblPassword">123</label></td>'
        + '<td><button class="btn btn-sm btn-info" onclick="GetLoginCred()">Copy</button>'
        + '<a href="#" onclick="GetLoginCredClear()">Clear</a></td>'
        + '</tr></tbody>'
        + '</table>'
        + '<br /><br />';
    return elements;
}

var GetLoginCred = function () {
    var _lblEmail = $("#lblEmail").text();
    var _lblPassword = $("#lblPassword").text();
    $("#Email").val(_lblEmail);
    $("#Password").val(_lblPassword);
}

var GetLoginCredClear = function () {
    $("#Email").val('');
    $("#Password").val('');
    $("#Email").focus();
}

var SaveMetaData = function () {
    if (IsDemoUser == 1) {
        var result = sessionStorage.getItem('GetDateWithRandomNumberBizERP');
        console.log(result);
        if (result == null) {
            SaveUserInfoFromBrowser();
        }
        var _GetDateWithRandomNumber = GetDateWithRandomNumber('INV_');
        sessionStorage.setItem('GetDateWithRandomNumberBizERP', _GetDateWithRandomNumber);
    }
}

var GetDateWithRandomNumber = function (Prefix) {
    //let _RandomNumber = Math.floor((Math.random() * 10000) + 1000);
    var _Date = new Date();
    var datestring = _Date.getFullYear() + ("0" + (_Date.getMonth() + 1)).slice(-2) + ("0" + _Date.getDate()).slice(-2)
        + ("0" + _Date.getHours()).slice(-2) + ("0" + _Date.getMinutes()).slice(-2) + ("0" + _Date.getSeconds()).slice(-2);

    var resut = Prefix + datestring;
    return resut;
}


