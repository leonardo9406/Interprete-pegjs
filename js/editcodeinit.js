var editor = ace.edit("editor");
//editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
var size = 17;

function plus(){
    size = size+5;
    document.getElementById('editor').style.fontSize=''+(size)+'px';
}
function minus(){
    size = size-5;
    document.getElementById('editor').style.fontSize=''+(size)+'px';
}