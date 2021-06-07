const minimapConfig = {
	entrants: [
		{
			name: "Livia Rita",
			imgSrc: "./assets/images/livia.jpeg",
		},
		{
			name: "Test",
			imgSrc: "./assets/images/test1.jpg",
		},
	],
}

const minimapArtistNameEls = [];
const minimapArtistImgEls = [];

function handleEnterMinimap(){
	let minimapArtistNames = document.getElementById("minimapArtistNames");
	let minimapArtistImgs = document.getElementById("minimapArtistImgs");
	minimapArtistNames.classList.add("fadeIn");
	minimapArtistImgs.classList.add("fadeIn");
}

function handleMinimapSelection(i){
	console.log(i);
	let minimapArtistName = minimapArtistNameEls[i];
	let minimapArtistImg = minimapArtistImgEls[i];
	minimapArtistName.classList.add("fadeIn");
	minimapArtistImg.classList.add("fadeIn");
}

function handleMinimapSelectionLeave(i){
	console.log(i);
	let minimapArtistName = minimapArtistNameEls[i];
	let minimapArtistImg = minimapArtistImgEls[i];
	minimapArtistName.classList.remove("fadeIn");
	minimapArtistImg.classList.remove("fadeIn");
}

function hideMinimapSelection(){
	let minimapArtistNames = document.getElementById("minimapArtistNames");
	let minimapArtistImgs = document.getElementById("minimapArtistImgs");
	minimapArtistNames.classList.remove("fadeIn");
	minimapArtistImgs.classList.remove("fadeIn");
}

function initMinimap(){
	let minimap = document.getElementById('minimap');
	minimap.addEventListener('mouseenter', function(){
		showInfiniteFloor()
		handleEnterMinimap();
	});
	minimap.addEventListener('mouseleave', function(){
		// hideInfiniteFloor();
		hideMinimapSelection();
	});
	// Change this
	let currentId = 13;
	for (let i = 0; i< 64; i++){
		let cell = document.createElement("div");
		if (i == currentId){
			cell.classList.add("active");
		}
		minimap.appendChild(cell);
		let circle = document.createElement("div");
		cell.appendChild(circle);
		cell.addEventListener("mouseenter", function(e){
			handleMinimapSelection(i);
		});
		cell.addEventListener("mouseleave", function(e){
			handleMinimapSelectionLeave(i);
		});
	}
	let minimapArtistNames = document.getElementById("minimapArtistNames");
	let minimapArtistImgs = document.getElementById("minimapArtistImgs");
	for (let i = 0; i<minimapConfig.entrants.length; i++){
		let name = document.createElement("div");
		name.innerHTML = minimapConfig.entrants[i].name;
		name.id = "minimapArtistName" + i;
		let img = document.createElement("img");
		img.id = "minimapArtistImg" + i;
		img.src = minimapConfig.entrants[i].imgSrc;
		minimapArtistNames.appendChild(name);
		minimapArtistNameEls.push(name);
		minimapArtistImgs.appendChild(img);
		minimapArtistImgEls.push(img);
	}
}

initMinimap();