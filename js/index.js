var fontSize = 16;

$("#fontPlus").click(function (e) {
    fontSize = fontSize + 2;
    $("#main").css({
        "font-size": fontSize
    });
});

$("#fontMinus").click(function (e) {
    fontSize = fontSize - 2;
    $("#main").css({
        "font-size": fontSize
    });
});

$("#imageAdd").click(function (e) {
    var file = $("<input type='file' accept='image/*'>");
    file.click();
    $(file).change(function (e) {
        var url = URL.createObjectURL(e.target.files[0]);
        let div = $("<div class='w3-col s12 w3-margin-bottom'></div>");
        let img = $("<img />").attr("src", url);
        img.addClass('w3-image w3-col s12 m4');
        div.append(img);
        $("#main").append(div);
    });
});

$("#textColor").click(function (e) {
    var file = $("<input type='color' value='#000000'>");
    file.click();
    $(file).change(function (e) {
        document.execCommand("foreColor", "true", file.val());
        $("#textColor").css({
            "color": file.val()
        });
    });
});

$("#textBold").click(function () {
    document.execCommand('bold');
});

$("#textItalic").click(function () {
    document.execCommand('italic');
});

$("#textUnderline").click(function () {
    document.execCommand('underline');
});

$("#justifyLeft").click(function () {
    document.execCommand('justifyLeft');
});

$("#justifyCenter").click(function () {
    document.execCommand('justifyCenter');
});

$("#justifyRight").click(function () {
    document.execCommand('justifyRight');
});

$("#undo").click(function () {
    document.execCommand('undo');
});

$("#redo").click(function () {
    document.execCommand('redo');
});

$("#listOl").click(function (e) {
    document.execCommand("insertOrderedList");
});

$("#listUl").click(function (e) {
    document.execCommand("insertUnorderedList");
});

$("#highlight").click(function (e) {
    document.execCommand("hiliteColor", "true", "#ffff00");
});

$("#heading").click(function (e) {
    $("#main").append($("<h2>Heading</h2>"));
});

$('.fa-bars').click(function () {
    $("#nav").toggleClass('w3-hide-small');
});


function openFile() {
    let f = $("<input type='file' accept='.html,.htm,.txt' >");
    let reader = new FileReader();
    f.click();
    $(f).change(function () {
        let openFile = this.files[0];
        reader.readAsText(openFile);
        reader.onload = function () {
            $("#main").html(reader.result);
            $("#file").text(openFile.name);
        }
        reader.onerror = function () {
            console.log(reader.error);
        }
    });
}

function createFile() {
    $('#createFile').removeClass('w3-hide');
    $("#createBtn").click(function (e) {
        $("#file").text($("#filename").val());
        $('#createFile').addClass('w3-hide');
    });
}

function download() {
    if ($("#file").text().trim().length < 1) {
        createFile();
    } else {
        var userInput = $("#main").text();
        var blob = new Blob([userInput], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, $("#file").text().trim());
    }
}

let elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
    }
}

$("#main").focus(function (e) {
    $("#moreOptions").addClass('w3-hide');
    openFullscreen();
});

$(document).ready(function () {
    openFullscreen();
});