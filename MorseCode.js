var yourText;
var splitOutText;
var textToMorse;
var display=document.getElementById("result").innerHTML;

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
    ' ' : '|'
};

function scanner(){
	yourText= prompt("Write text to be translated to Morse Code here");
	yourText=yourText.toLowerCase;
}
function splitText(){
	splitOutText=yourText.split("");

}

for(var i = 0; i < splitOutText.length; i++){
   textToMorse+= morseCode[splitOutText[i]] + " ";
   display=textToMorse;
};

scanner();
splitText();
















