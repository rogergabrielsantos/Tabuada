		var cont= 1;//controle das paginas
		var controls = true;//controle do icone do som
		var contbal = false;//controle do balao

		function som(){
		if (controls==true){
		
			document.getElementById("cSom").src = "som2.png";
			document.getElementById("aud").pause();
		
			controls = false;
		}else{
		document.getElementById("cSom").src = "som1.png";
		document.getElementById("aud").play();	
		controls = true;
		}
		}
		
		function voltar(){
		window.location.href = "../tabuada.html";
		
		}
		function next(){
		window.location.href = "../index.html";
		
		}
		
		function tudo(){
				
		document.getElementById("todo").play();	
		document.getElementById("um").src = "r1.png";
		document.getElementById("dois").src = "r2.png";
		document.getElementById("tres").src = "r3.png";
		document.getElementById("quatro").src = "r4.png";
		document.getElementById("cinco").src = "r5.png";		
		document.getElementById("seis").src = "r6.png";		
		document.getElementById("sete").src = "r7.png";
		document.getElementById("oito").src = "r7.png";
		document.getElementById("nove").src = "r9.png";		
		document.getElementById("dez").src = "r10.png";
		
		}
		
		function um(ref){
		
		if (ref==1){	
		document.getElementById("prin").src = "audios/1.mp3";
		document.getElementById("prin").play();	
		document.getElementById("um").src = "r1.png";
		}
		if (ref==2){	
		document.getElementById("prin").src ="audios/2.mp3";
		document.getElementById("prin").play();	
		document.getElementById("dois").src = "r2.png";
		}
		if (ref==3){	
		document.getElementById("prin").src = "audios/3.mp3";
		document.getElementById("prin").play();	
		document.getElementById("tres").src = "r3.png";
		}
		if (ref==4){	
		document.getElementById("prin").src ="audios/4.mp3";
		document.getElementById("prin").play();	
		document.getElementById("quatro").src = "r4.png";
		}
		if (ref==5){	
		document.getElementById("prin").src = "audios/5.mp3";
		document.getElementById("prin").play();
		document.getElementById("cinco").src = "r5.png";		
		}
		if (ref==6){	
		document.getElementById("prin").src ="audios/6.mp3";
		document.getElementById("prin").play();
		document.getElementById("seis").src = "r6.png";		
		}
		if (ref==7){	
		document.getElementById("prin").src = "audios/7.mp3";
		document.getElementById("prin").play();	
		document.getElementById("sete").src = "r7.png";
		}
		if (ref==8){	
		document.getElementById("prin").src ="audios/8.mp3";
		document.getElementById("prin").play();	
		document.getElementById("oito").src = "r8.png";
		}
		if (ref==9){	
		document.getElementById("prin").src = "audios/9.mp3";
		document.getElementById("prin").play();
		document.getElementById("nove").src = "r9.png";		
		}
		if (ref==10){	
		document.getElementById("prin").src ="audios/10.mp3";
		document.getElementById("prin").play();	
		document.getElementById("dez").src = "r10.png";
		}
		
		}
				
		
	function novo(){			
		document.getElementById("um").src = "1p.png";
		document.getElementById("dois").src = "1p.png";
		document.getElementById("tres").src = "1p.png";
		document.getElementById("quatro").src = "1p.png";
		document.getElementById("cinco").src = "1p.png";		
		document.getElementById("seis").src = "1p.png";		
		document.getElementById("sete").src = "1p.png";
		document.getElementById("oito").src = "1p.png";
		document.getElementById("nove").src = "1p.png";		
		document.getElementById("dez").src = "1p.png";
		document.getElementById("todo").pause();	
		
		
		}	
		
		
		
		
		
		
		
		
		
		
		
		
		function umo(vari){
			
		switch(vari) {
		case 1:
			window.location.href = "um/tbum.html";
        break;
		case 2:
			window.location.href = "dois/tbdois.html";
        break;
		case 3:
			window.location.href = "tres/tbtres.html";
        break;
		case 4:
			window.location.href = "quatro/tbquatro.html";
        break;
		case 5:
			window.location.href = "cinco/tbcinco.html";
        break;
		case 6:
			window.location.href = "seis/tbseis.html";
		break;
		case 7:
			window.location.href = "sete/tbsete.html";
		break;
		case 8:
			window.location.href = "oito/tboito.html";
		break;
		case 9:
			window.location.href = "nove/tbnove.html";
		break;
		
}
		
		
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		