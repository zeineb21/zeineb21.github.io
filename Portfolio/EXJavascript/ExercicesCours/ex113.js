var md = document.createElement('div');
md.id = 'divTP4';
var form = document.createElement('form');
var fieldset = document.createElement('fieldset');
var legend = document.createElement('legend');
var legendText = document.createTextNode('Uploader une image');
var center = document.createElement('div');

form.action  = 'upload.php';
form.enctype = 'multipart/form-data';
form.method  = 'post';

center.setAttribute('style', 'text-align: center');

legend.appendChild(legendText);

fieldset.appendChild(legend);
fieldset.appendChild(center);
form.appendChild(fieldset);

var label =     document.createElement('label');
var labelText = document.createTextNode('Image à uploader :');
var input =     document.createElement('input');
var br =        document.createElement('br');
var submit =    document.createElement('input');

input.type = 'file';
input.id   = 'inputUpload';
input.name = input.id;
submit.type  = 'submit';
submit.value = 'Envoyer';

label.htmlFor = 'inputUpload';
label.appendChild(labelText);
center.appendChild(label);
center.appendChild(input);
center.appendChild(br);
center.appendChild(br.cloneNode(false)); 
center.appendChild(submit);

md.appendChild(form);
document.getElementById('output').appendChild(md);