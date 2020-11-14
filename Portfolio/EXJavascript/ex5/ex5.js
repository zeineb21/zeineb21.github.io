function verif(){ 
    var final=0;

    if(document.form.nom.value == "") 
    { 
    alert("Entrer votre nom et prénom!");  
    final=-1;
 
    };
    if(document.form.cin.value == "") 
    {
         alert("Entrer votre CIN!");
         final=-1;
         
    };
    var v = 1;
    var taille =document.form.cin.value.length;
    for(i=0;i<taille;++i)
    {
        if(document.form.cin.value.charAt(i) < "0" || document.form.cin.value.charAt(i) > "9" || taille!=8) 
        v = -1;
    }
    if(v == -1) 
    {
        alert("Le numérode votre CIN est incorrect!");
        final=-1;
    }
    if(document.form.email.value == "") 
    {
        alert("Entrer votre adresse e-mail!");
        final=-1;
    }
    if(document.form.email.value.indexOf('@') == -1) 
    {
        alert("Adresse e-mail incorrecte!");
        final=-1;
    }
    taille=document.form.list.options.length; 
    var n=0;
    for(i=0;i<taille;i++)
    {
        if (document.form.list[i].selected){n+=1};
    }
    if (n==0) 
    {
        alert("Veuillez choisir un module de formation!");
        final=-1;
    }
    if (n>2) 
    {
        alert("Veuillez sélectionner au maximum 2 choix!");
        final=-1;
    }
    if(final==0)
    {
        document.write("Inscription achevée !!");
    }
    }