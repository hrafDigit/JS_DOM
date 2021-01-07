/* 
****************
** Exercice 1 **
****************
 */

// == Question 1 ==
function changeStyle() {
    var x = document.getElementById('parag1');
    x.style.color = "white";
    x.style.backgroundColor = "black";
    x.style.border = "dotted 2px red";
    x.style.padding = "5px";
}
function changeStyleReset() {
    var x = document.getElementById('parag1');
    x.style.color = "inherit";
    x.style.backgroundColor = "inherit";
    x.style.border = "none";
    x.style.padding = "0";
}

// == Question 1 ==
// Option 1 : on sépare  */
function activeClassAdd() {
    // doit être appelé en premier
    var y = document.getElementById("parag2");
    y.classList.add("activeClass");
}
function activeClassRemove() {
    // doit être appelé en premier
    var y = document.getElementById("parag2");
    y.classList.remove("activeClass");
}
// Option 1 : on concatène  */
function activeClassAdd() {
    // doit être appelé en premier
    document.getElementById("parag2").classList.add("activeClass");
}
function activeClassRemove() {
    // doit être appelé en premier
    document.getElementById("parag2").classList.remove("activeClass");
}


/* 
****************
** Exercice 2 **
****************
 */
function getAttributes() {
    var lien = document.querySelector("a#w3r");
    var hrefLink = lien.getAttribute('href');
    var typeLink = lien.getAttribute('type');
    var hreflangLink = lien.getAttribute('hreflang');
    var relLink = lien.getAttribute('rel');
    var targetLink = lien.getAttribute('target');
    console.log('href : ' + hrefLink + ' | type : ' + typeLink + ' | hreflang : ' + hreflangLink + ' | rel : ' + relLink + ' | target : ' + targetLink);
    document.getElementById("hrefLink").innerHTML = 'valeur <em>href</em> du lien : ' + hrefLink;
    document.getElementById("typeLink").innerHTML = 'valeur <em>type</em> du lien : ' + typeLink;
    document.getElementById("hreflangLink").innerHTML = 'valeur <em>hreflang</em> du lien : ' + hreflangLink;
    document.getElementById("relLink").innerHTML = 'valeur <em>rel</em> du lien : ' + relLink;
    document.getElementById("targetLink").innerHTML = 'valeur <em>target</em> du lien : ' + targetLink;
}
function getAttributesAlt() {
    var allAttributes = document.getElementById("w3r");
    console.log(allAttributes.href);
    console.log(allAttributes.type);
    console.log(allAttributes.hreflang);
    console.log(allAttributes.rel);
    console.log(allAttributes.target);
    document.getElementById("demo").innerHTML = '<li>valeur <em>href</em> du lien : ' + allAttributes.href + '</li>' + '<li>valeur <em>type</em> du lien : ' + allAttributes.type + '</li>' + '<li>valeur <em>hreflang</em> du lien : ' + allAttributes.hreflang + '</li>' + '<li>valeur <em>rel</em> du lien : ' + allAttributes.rel + '</li>' + '<li>valeur <em>target</em> du lien : ' + allAttributes.target + '</li>';
}

function getAttributesCorrect() {
    var u = document.getElementById("w3r").href;
    var v = document.getElementById("w3r").hreflang;
    var x = document.getElementById("w3r").target;
    var w = document.getElementById("w3r").rel;
    var y = document.getElementById("w3r").type; 
    alert('The value of the href attribute of the link is : ' + u);
    alert('The value of the hreflang attribute of the link is : ' + v);
    alert('The value of the rel attribute of the link is : ' + w);
    alert('The value of the taget attribute of the link is : ' + x); 
    alert('The value of the type attribute of the link is : ' + y);
}


/* 
****************
** Exercice 3 **
****************
 */
/**
== Test ==
function getFormvalue() {
    var fname = document.getElementsByName("fname")[0].tagName;
    var lname = document.getElementsByName("lname")[0].tagName;
    document.getElementById("result").innerHTML = nom + " " + prenom;
}
 */

 function getFormvalue() {
    var prenom = document.getElementsByTagName('input')[0].value;
    var nom = document.getElementsByTagName('input')[1].value;
    console.log(prenom);
    console.log(nom);
    document.getElementById("resultat").innerHTML = prenom + '' + nom;
}

function getFormvalueCorrection() {
    var x=document.getElementById("form111");
    for (var i=0;i<x.length;i++) {
        if (x.elements[i].value!='Submit'){
            //alert(x.elements[i].value);
            document.getElementById("resultAlt").innerHTML = x.elements[0].value + " " + x.elements[1].value;
        }
    }
}


/* 
****************
** Exercice 4 **
****************
 */
window.onload = function () {
    alert('Bonjour, je suis une page HTML')
};


function dogToCatLoL() {
    alert('but LoL cats will always remain !')
}

function changerFond() {
    document.body.style.backgroundColor = "yellow";
}
function changerFondEtBouton() {
    document.body.style.backgroundColor = "green";
    document.getElementsByTagName('button')[1].style.border = "dashed 1px red";
    document.getElementsByTagName('button')[1].style.fontWeight = "bold";
    document.getElementsByTagName('button')[1].style.color = "red";
}
function changerFondEtBoutonReset() {
    document.body.style.backgroundColor = "inherit";
    document.getElementsByTagName('button')[1].style.border = "inherit";
    document.getElementsByTagName('button')[1].style.fontWeight = "inherit";
    document.getElementsByTagName('button')[1].style.color = "inherit";

}