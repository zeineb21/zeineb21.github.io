function moyenne(form){
    var DC1= document.form.n1.value;
    var DC2= document.form.n2.value;
    var DS= document.form.n3.value;
    var C1= document.form.c1.value;
    var C2= document.form.c2.value;
    var C3= document.form.c3.value;
    var moy;
    moy=(parseFloat(DC1)*parseInt(C1)+parseFloat(DC2)*parseInt(C2)+parseFloat(DS)*parseInt(C3))/(parseInt(C1)+parseInt(C2)+parseInt(C3));
    document.write("la moyenne est : "+moy);
}