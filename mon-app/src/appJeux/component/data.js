import Chat from '../image/imageMem/chat.jpg';
import Chien from '../image/imageMem/chien.jpg';
import Jaco from '../image/imageMem/jaco.jpg';
import Chien1 from '../image/imageMem/chien1.jpg';
import Ecureuil from '../image/imageMem/ecureuil.jpg';
import Singe from '../image/imageMem/singe.jpg';
import Tigre from '../image/imageMem/titre.jpg';
import Lapin from '../image/imageMem/lapin.jpg';

import Avifaune from '../image/imageMem/avifaune.jpg';
import Buffle from '../image/imageMem/buffle.jpg';
import Chameau from '../image/imageMem/chameau.jpg';
import Elephant from '../image/imageMem/elephant.jpg';
import Girafe from '../image/imageMem/girafe.jpg';
import Kangourou from '../image/imageMem/kangourou.jpg';
import Leopard from '../image/imageMem/leopard.jpg';
import Lion from '../image/imageMem/lion.jpg';

import Singe1 from '../image/imageMem/singe1.jpg';
import Oiseau1 from '../image/imageMem/oiseau1.jpg';
import Oiseau2 from '../image/imageMem/oiseau2.jpg';
import Oiseau3 from '../image/imageMem/oiseau3.jpg';


import A from '../image/imageLettre/A.jpg'
import B from '../image/imageLettre/B.jpg'
import C from '../image/imageLettre/C.jpg'
import D from '../image/imageLettre/D.jpg'
import E from '../image/imageLettre/E.jpg'
import F from '../image/imageLettre/F.jpg'
import G from '../image/imageLettre/G.jpg'
import H from '../image/imageLettre/H.jpg'
import I from '../image/imageLettre/I.jpg'
import J from '../image/imageLettre/J.jpg'
import K from '../image/imageLettre/K.jpg'
import L from '../image/imageLettre/L.jpg'
import M from '../image/imageLettre/M.jpg'

import N from '../image/imageLettre/N.jpg'
import O from '../image/imageLettre/O.jpg'
import P from '../image/imageLettre/P.jpg'
import Q from '../image/imageLettre/Q.jpg'
import R from '../image/imageLettre/R.jpg'
import S from '../image/imageLettre/S.jpg'
import T from '../image/imageLettre/T.jpg'
import U from '../image/imageLettre/U.jpg'
import V from '../image/imageLettre/V.jpg'
import W from '../image/imageLettre/W.jpg'
import X from '../image/imageLettre/X.jpg'
import Y from '../image/imageLettre/Y.jpg'
import Z from '../image/imageLettre/Z.jpg'




//const imageA=[Chat,Jaco,Chien,Lapin,Chien1,Chat,Chien,Singe,Jaco,Lapin,Tigre,Ecureuil,Tigre,Singe,Chien1,Ecureuil];

const jsonImage = [{
	id:1,
	imag:Chat
},
{
	id:2,
	imag:Chien
}
];

export const jsonImag = [{
	id:1,
	imag:Chat
},
{
	id:2,
	imag:Jaco
},
{
	id:3,
	imag:Chien
},
{
	id:4,
	imag:Lapin
}
,
{
	id:5,
	imag:Chien1
},

{
	id:6,
	imag:Singe
},
{
	id:7,
	imag:Tigre
},
{
	id:8,
	imag:Ecureuil
},
{
	id:9,
	
	imag:Avifaune
},
{
	id:10,
	
	imag:Buffle
},
{
	id:11,
	imag:Chameau
},
{
	id:12,
	imag:Elephant
}
,
{
	id:13,
	imag:Girafe
},

{
	id:14,
	imag:Kangourou
},
{
	id:15,
	imag:Leopard
},
{
	id:16,
	imag:Lion
},{
	id:17,
	imag:Singe1
},
{
	id:18,
	imag:Oiseau1
},
{
	id:19,
	imag:Oiseau2
},
{
	id:20,
	imag:Oiseau3
}
];


export const jsonImagLettre = [{
	id:1,
	imag:A
},
{
	id:2,
	imag:B
},
{
	id:3,
	imag:C
},
{
	id:4,
	imag:D
}
,
{
	id:5,
	imag:E
},

{
	id:6,
	imag:F
},
{
	id:7,
	imag:G
},
{
	id:8,
	imag:H
},
{
	id:9,
	
	imag:I
},
{
	id:10,
	
	imag:J
},
{
	id:11,
	imag:K
},
{
	id:12,
	imag:M
}
,
{
	id:13,
	imag:N
},

{
	id:14,
	imag:O
},
{
	id:15,
	imag:Q
},
{
	id:16,
	imag:R
},{
	id:17,
	imag:S
},
{
	id:18,
	imag:T
},
{
	id:19,
	imag:U
},
{
	id:20,
	imag:V
},

{
	id:21,
	imag:W
},
{
	id:22,
	imag:X
},{
	id:23,
	imag:Y
},
{
	id:24,
	imag:Z
},
{
	id:25,
	imag:L
},
{
	id:26,
	imag:P
}
];


export function melange(tab){
    var a = 0;
    var t;
    for(var i = tab.length-1; i >= 0; i--){
      a = Math.floor(Math.random() * Math.floor(tab.length));
      t = tab[a];
      tab[a] = tab[i];
      tab[i] = t;
    
    }
    return tab;
}

const melangeJsonImage = melange(jsonImag);

const melangeJsonImageLettre = melange(jsonImagLettre);

function tab4(){
	var tab = [];
	for(var i = 0; i<8; i++){
		tab[i] = melangeJsonImage[i];
	}
	return tab;
}

function tab5(){
	var tab = [];
	for(var i = 0; i<13; i++){
		tab[i] = melangeJsonImage[i];
	}
	return tab;
}

function tab6(){
	var tab = [];
	for(var i = 0; i<18; i++){
		tab[i] = melangeJsonImage[i];
	}
	return tab;
}



const tabQ = tab4();
const tabQ1 = tab5();
const tabQ2 = tab6();
//console.log(tabQ)

const jsonImagie = tabQ.concat(tabQ);
export const jsonImagee = melange(jsonImagie);

const jsonImagie1 = tabQ1.concat(tabQ1);
export const jsonImagee1 = melange(jsonImagie1);

const jsonImagie2 = tabQ2.concat(tabQ2);
export const jsonImagee2 = melange(jsonImagie2);



function tabL4(){
	var tab = [];
	for(var i = 0; i<8; i++){
		tab[i] = melangeJsonImageLettre[i];
	}
	return tab;
}

function tabL5(){
	var tab = [];
	for(var i = 0; i<13; i++){
		tab[i] = melangeJsonImageLettre[i];
	}
	return tab;
}

function tabL6(){
	var tab = [];
	for(var i = 0; i<18; i++){
		tab[i] = melangeJsonImageLettre[i];
	}
	return tab;
}


const tabQL = tabL4();
const tabQL1 = tabL5();
const tabQL2 = tabL6();
//console.log(tabQ)

const jsonImagieL = tabQL.concat(tabQL);
export const jsonImageeL = melange(jsonImagieL);

const jsonImagieL1 = tabQL1.concat(tabQL1);
export const jsonImageeL1 = melange(jsonImagieL1);

const jsonImagieL2 = tabQL2.concat(tabQL2);
export const jsonImageeL2 = melange(jsonImagieL2);