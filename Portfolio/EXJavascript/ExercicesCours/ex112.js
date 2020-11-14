var mad = document.createElement('div');
md.id = 'divTP2';

var p = document.createElement('p');
var pText = document.createTextNode('Langages basés sur ECMAScript :');
p.appendChild(pText);

var langages = [document.createTextNode('JavaScript'), document.createTextNode('JScript'), document.createTextNode('ActionScript'), document.createTextNode('EX4')];

var uL = document.createElement('ul');
var uI;

for (var i = 0, c=languages.length; i < c; i++) {
    uI = document.createElement('li');
    uI.appendChild(langages[i]);
    uL.appendChild(uI);
}

md.appendChild(p);
md.appendChild(uL);
document.getElementById('output').appendChild(md);