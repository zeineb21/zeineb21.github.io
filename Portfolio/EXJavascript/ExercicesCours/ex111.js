var md = document.createElement('div');
md.id = 'divTP1';

var Strong1 = document.createElement('strong');
var Strong2 = document.createElement('strong');

Strong1.appendChild(document.createTextNode('World Wide Web Consortium'));
Strong2.appendChild(document.createTextNode('W3C'));

var orgLien = document.createElement('a');
var wwwLien = document.createElement('a');

orgLien.href  = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
orgLien.title = 'Organisme de normalisation';
orgLien.appendChild(document.createTextNode('organisme de standardisation'));

wwwLien.href  = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
wwwLien.title = 'World Wide Web';
wwwLien.appendChild(document.createTextNode('World Wide Web'));

md.appendChild(document.createTextNode('Le '));
md.appendChild(Strong1);
md.appendChild(document.createTextNode(', abrégé par le sigle '));
md.appendChild(Strong2);
md.appendChild(document.createTextNode(', est un '));
md.appendChild(orgLien);
md.appendChild(document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du '));
md.appendChild(wwwLien);
md.appendChild(document.createTextNode('.'));

document.getElementById('output').appendChild(md);
