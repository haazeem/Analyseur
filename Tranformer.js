var fs = require('fs');
var a="";
var m="";
fs.readFile('DATA.txt', 'utf8', function(err, contents) {
    console.log("Texte Avant : \n"+contents);  
  if(!err){
    for( i=0;i<contents.length;i++){
        m=contents.charAt(i);
        if(m==m.toLowerCase()){
            a+=m.toUpperCase();
        }else{
            a+=m.toLowerCase();
        }
    }
    console.log("Texte Aprés : \n"+a);
  }else{
    console.log("Erreur File");
  }
});

