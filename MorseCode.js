var yourText= prompt("Write text to be translated to Morse Code here:  ");
	yourText=yourText.toLowerCase();

var morseCode = {
	'a' : '.-',
	'b' : '-...',
	'c' : '-.-.',
	'd' : '-..',
	'e' : '.',
	'f' : '..-.',
	'g' : '--.',
	'h' : '....',
	'i' : '..',
	'j' : '.---',
	'k' : '-.-',
	'l' : '.-..',
	'm' : '--',
	'n' : '-.',
	'o' : '---',
	'p' : '.--.',
	'q' : '--.-',
	'r' : '.-.',
	's' : '...',
	't' : '-',
	'u' : '..-',
	'v' : '...-',
	'w' : '.--',
	'x' : '-..-',
	'y' : '-.--',
	'z' : '--..',
	'1' : '.----',
	'2' : '..---',
	'3' : '...--', 
    '4' : '....-',
    '5' : '.....',
    '6' : '-....',
    '7' : '--...',
    '8' : '---..',
    '9' : '----.',
    '0' : '-----',
    '.' : '.-.-.-',
    ',' : '--..--',
    '?' : '..--..',
    '/' : '-..-.',
    ' ' : '|',
}
var textToMorse ="";

for(var i = 0; i < yourText.length; i++){
   var result = yourText.charAt(i);
   textToMorse+=morseCode[result];
 
}

document.getElementById("result").innerHTML=textToMorse ;


















