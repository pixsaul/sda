const minimapConfig = {
	entrants: [
		{
			name: "After Work Studio",
			imgSrc: "/assets/scenes/after-work-studio/3d_After-Work_01.jpg",
			path: "after-work-studio"
		},
		{
			name: "Alice Franchetti",
			imgSrc: "/assets/scenes/alice-franchetti/3d_Alice-Franchetti_1.jpg",
			path: "alice-franchetti",
		},
		{
			name: "Annina Arter",
			imgSrc: "/assets/scenes/annina-arter/3d_Annina-Arter_01.jpg",
			path: "annina-arter",
		},
		{
			name: "Chaumont Zaerpour",
			imgSrc: "/assets/scenes/chaumont-zaerpour/3d_Chaumont-Zaerpour_01.jpeg",
			path: "chaumont-zaerpour",
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
	// console.log(i);
	let minimapArtistName = minimapArtistNameEls[i];
	let minimapArtistImg = minimapArtistImgEls[i];
	minimapArtistName.classList.add("fadeIn");
	minimapArtistImg.classList.add("fadeIn");
}

function handleMinimapSelectionLeave(i){
	// console.log(i);
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

function getCurrentArtistPath(){
	let path = window.location.pathname;
	let r =  path.substring(path.lastIndexOf('/') + 1);
	console.log(r);
	return r;
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
	const currentArtistsPath = getCurrentArtistPath()
	// Change this
	let minimapArtistNames = document.getElementById("minimapArtistNames");
	let minimapArtistImgs = document.getElementById("minimapArtistImgs");
	for (let i = 0; i< 64; i++){
		let cell = document.createElement("div");
		
		minimap.appendChild(cell);
		let circle = document.createElement("div");
		cell.appendChild(circle);
		cell.addEventListener("mouseenter", function(e){
			handleMinimapSelection(i);
		});
		cell.addEventListener("mouseleave", function(e){
			handleMinimapSelectionLeave(i);
		});
		// Remove this line once all are added
		if (i < minimapConfig.entrants.length){
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
			if (minimapConfig.entrants[i].path == currentArtistsPath){
				cell.classList.add("active");
			}
		}
	}
}

initMinimap();
