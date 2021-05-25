import React from 'react';


function ImageChager(){
	var img = new Image();
	
var width;
var height;
var length;
var ylength;
let ime=[];
var ide;
var chek;

	
	 length=2;
	 ylength=2;
img.src ='https://file1.science-et-vie.com/var/scienceetvie/storage/images/1/0/9/109996/tigre-positif-covid-les-animaux-captivite-sont-aussi-une-source-epidemies-potentielles.jpg?alias=original' ;
img.onload=imageSplit;	
//img.src = 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg';
//https://www.economie-magazine.com/images/dossiers/2017-06/animaux-133014.jpg
 function imageSplit() {
	var k1=0;
	var k2=1;
	//alert("simple afficher");
	width = this.width;
  height = this.height;
 	for (var j = 0; j < length; j++){
  	for (var i = 0; i < length; i++){
  		var left = (-1 * width/length * i).toString() +"px";
   		var top = (-1 * height/ylength * j).toString() +"px";
   		var element;
   	    if(k1<length*length-1||length===1){
   		 element = ('<div/>', {
    		id: ""+k2,
    		class: "divElem",
    		css: {
        	"width" : Math.floor(width/length),
        	"height":Math.floor(height/ylength),
          "background-position": left  + " " +  top,
          "background-image" : 'url(' + img.src + ')'
           
    		}
			})
			
   	    }
   	    else if(k1===length*length-1){
   	    	
   	     element = ('<div/>', {
     		id: ""+k2,
     		class: "divElem",
     		css: {
         	"width" : Math.floor(width/length),
         	"height":Math.floor(height/ylength),
           "background-position": left  + " " +  top,
           "background-color" : "gray"
            
     		}
 			})
   	    }
   	
   		    ime.push(element);
   		
   		   var div = document.getElementById('wrapper');
        div.append(element);
   		 k1++;
   		 k2++;
   		
   		   
  	}
	
 	}
 
 	 console.log(ime.length);
	
}

}

function ComposantImage(){
	
    
    const ctx = document.getElementById('canvas').getContext('2d');
  const img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
  img.src = "data:image/jpeg;base64,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";

	return(
		  <div>
		  <h1> Image loading</h1>


		  <div id="wrapper">

         </div>

         <canvas id="canvas">
          Your browser does not support the HTML canvas tag.
              </canvas>
		  </div>
		)
}

export default ComposantImage;