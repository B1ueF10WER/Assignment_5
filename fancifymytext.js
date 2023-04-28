var button = document.getElementById("button");
var moo_button = document.getElementById("moo");
var text = document.getElementById("textarea");
var betty = document.getElementById("boringBetty");
var fancy = document.getElementById("fancyShmancy");


function alert_message() {
    alert('Radio button was changed.');
}


button.onclick = function() {
    text.style.fontSize = "24pt";
}

fancy.onchange = function() {
    text.style.fontFamily = "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    text.style.color = "blue";
    text.style.textDecorationLine = "underline";
    text.style.backgroundColor = "violet";
    text.style.borderBlockColor = "pink";
    text.style.fontWeight = "bold";
    alert_message();
}
betty.onchange = function() {
    text.style.fontFamily = "";
    text.style.color = "";
    text.style.textDecorationLine = "";
    text.style.backgroundColor = "";
    text.style.borderBlockColor = "";
    text.style.fontWeight = "";
    text.style.fontSize = "";
    alert_message();
}

moo_button.onclick = function() {
    var thisText = text.value;
    thisText = thisText.toUpperCase();
    var str = thisText.split(".");
    for (var i = 0; i < str.length; i++) {
        var words = str[i].split(" ");
        words[words.length-1]+="-moo";
        str[i] = words.join(" ");
    }
    thisText = str.join(".");
    text.value = thisText;

    //str1 = parts.join(str2);
}