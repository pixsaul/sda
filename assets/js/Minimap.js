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
		{
			name: "Clement Lamblet",
			imgSrc: "/assets/scenes/clement-lambelet/3d_Clement-Lambelet_01.jpg",
			path: "clement-lamblet",
		},
		{
			name: "Clio Hadjigeorgiou",
			imgSrc: "/assets/scenes/clio-hadjigeorgiou/3d_Clio-Hadjigeorgiou_1.png",
			path: "clio-hadjigeorgiou",
		},
		{
			name: "Dafi Kühne",
			imgSrc: "/assets/scenes/dafi-kuhne/3d_Dafi-Kuhne_1.png",
			path: "dafi-kuhne",
		},
		{
			name: "Data Orbit",
			imgSrc: "/assets/scenes/data-orbit/3d_Data-Orbit_1.jpg",
			path: "data-orbit",
		},
		{
			name: "Edition Moderne",
			imgSrc: "/assets/scenes/edition-moderne/3d_Edition-Moderne_01.jpg",
			path: "edition-moderne",
		},
		{
			name: "Eurostandard",
			imgSrc: "/assets/scenes/eurostandard/3d_Eurostandard_01.jpg",
			path: "eurostandard",
		},
		{
			name: "Futuress",
			imgSrc: "/assets/scenes/futuress/3d_Futuress_01.jpg",
			path: "futuress",
		},
		{
			name: "Hannes Gloor",
			imgSrc: "/assets/scenes/hannes-gloor/3d_Hannes_Gloor_1.png",
			path: "hannes-gloor",
		},
		{
			name: "Jonathan Hares",
			imgSrc: "/assets/scenes/jonathan-hares/3d_Jonathan-Hares_1.png",
			path: "jonathan-hares",
		},
		{
			name: "Julia Seemann",
			imgSrc: "/assets/scenes/julia-seemann/3d_Julia-Seeman_01.jpg",
			path: "julia-seemann",
		},
		{
			name: "Kaj Lehmann",
			imgSrc: "/assets/scenes/kaj-lehmann/3d_Kaj-Lehmann_01.jpg",
			path: "kaj-lehmann",
		},
		{
			name: "Krispin Hee",
			imgSrc: "/assets/scenes/krispin-hee/3d_Krispin-Hee_01.jpg",
			path: "krispin-hee",
		},
		{
			name: "Lina Muller",
			imgSrc: "/assets/scenes/lina-muller/3d_Lina-Muller_01.jpg",
			path: "lina-muller",
		},
		{
			name: "Livia Rita",
			imgSrc: "/assets/scenes/livia-rita/3d_Livia-Rita_01.jpg",
			path: "livia-rita",
		},
		{
			name: "Lou Rais",
			imgSrc: "/assets/scenes/lou-rais/3d_Lou-Rais_01.jpg",
			path: "lou-rais",
		},
		{
			name: "Lucas Schenardi",
			imgSrc: "/assets/scenes/lucsa-schenardi/3d_Luca-Schenardi_01.jpg",
			path: "lucas-schenardi",
		},
		{
			name: "Marc Asekhame",
			imgSrc: "/assets/scenes/marc-asekhame/3d_Marc-Asekhame_01.jpg",
			path: "marc-asekhame",
		},
		{
			name: "Mariel Manuel",
			imgSrc: "/assets/scenes/mariel-manuel/3d_Mariel-Manuel_01.jpg",
			path: "mariel-manuel",
		},
		{
			name: "Marwan Bassiouni",
			imgSrc: "/assets/scenes/marwan-bassiouni/3d_Marwan-Bassiouni_01.jpg",
			path: "marwan-bassiouni",
		},
		{
			name: "Mathias Renner",
			imgSrc: "/assets/scenes/mathias-renner/3d_Mathias-Renner_01.jpg",
			path: "mathias-renner",
		},
		{
			name: "Maya Rochat",
			imgSrc: "/assets/scenes/maya-rochat/3d_Maya-Rochat_01.jpg",
			path: "maya-rochat",
		},
		{
			name: "Niki Paltenghi",
			imgSrc: "/assets/scenes/niki-paltenghi/3d_Niki-Paltenghi_01.jpg",
			path: "niki-paltenghi",
		},
		{
			name: "Olga Prader",
			imgSrc: "/assets/scenes/olga-prader/3d_Olga-Prader_01.jpg",
			path: "olga-prader",
		},
		{
			name: "Omnigroup",
			imgSrc: "/assets/scenes/omnigroup/3d_Omnigroup_01.jpg",
			path: "omnigroup",
		},
		{
			name: "Ottolinger",
			imgSrc: "/assets/scenes/ottolinger/3d_Ottolinger_01.jpg",
			path: "ottolinger",
		},
		{
			name: "Sebastian Gross",
			imgSrc: "/assets/scenes/sebastian-gross/3d_Sebastian-Gross_01.jpg",
			path: "sebastian-gross",
		},
		{
			name: "Shadow Brand",
			imgSrc: "/assets/scenes/shadow-brand/3d_Shadow-Brand_01.jpg",
			path: "shadow-brand",
		},
		{
			name: "Thomas Clement",
			imgSrc: "/assets/scenes/thomas-clement/3d_Thomas-Clement_01.jpg",
			path: "thomas-clement",
		},
		{
			name: "Virginie Jemmely",
			imgSrc: "/assets/scenes/virginie-jemmely/3d_Virginie-Jemmely_01.jpg",
			path: "virginie-jemmely",
		},
		{
			name: "Weichi He",
			imgSrc: "/assets/scenes/weichi-he/3d_Weichi-He_01.jpg",
			path: "weichi-he",
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
		let cell = document.createElement("a");
		
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
			} else {
				cell.href = "/participants/" + minimapConfig.entrants[i].path;
			}
		}
	}
}

initMinimap();
