(function(){
	
	"use strict";
	
		let currentImage = 0;
		//var img = document.getElementById("myimage");
		const myphotos = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
		const container = document.getElementById("content");
		const nextBtn = document.getElementById("next");
		const prevBtn = document.getElementById("previous");
		
		
		nextBtn.addEventListener("click", function(e){
		e.preventDefault();
		
		currentImage++;
		
		if (currentImage > myphotos.length-1) {currentImage = 0;}
		//img.src = myphotos[currentImage];
		
		changeSlide();
		
		});
		
		prevBtn.addEventListener("click", function(e){
		e.preventDefault();
		
		currentImage--;
		
		if (currentImage < 0) {currentImage = myphotos.length-1;}
		//img.src = myphotos[currentImage];
		
		changeSlide();
		
		});
		
		function changeSlide() {
		
		const newSlide = document.createElement("img");
		newSlide.src = `slides/${myphotos[currentImage]}`;
		newSlide.className = "fadeinimg";
		container.appendChild(newSlide);
		
		if (container.children.length > 2) {
			container.removeChild(container.children[0]);
			}
		
		}
			
}());