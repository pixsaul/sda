var path = '/assets/scenes/camille-blin/'
roomConfig = {
	images: [
		{
			path: path+'3d_Camille-Blin_01.jpg',
			scale: 3.2,
			position: {
				x: 1.0,
				y: 0.2,
				z: 0,
			},
			rotation: {
				x: 0,
				y: -(Math.PI / 180) * 55,
				z: 0,
			}
		},
		{
			path: path+'3d_Camille-Blin_02.jpg',
			scale: 4,
			position: {
				x: 0,
				y: 0,
				z: 1.35,
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0,
			}
		},
	],
	blobs: [
		{
			path: path+'Camille-Blin.fbx',
			scale: 0.25,
			position: {
				x: 0,
				y: -2,
				z: 0,
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0,
			}
		}
	],
	videos: [
		{
			path: path+'3d_Camille-Blin_03.mp4',
			scale: 2.9,
			position: {
				x: -1.0,
				y: 0.4,
				z: 0,
			},
			rotation: {
				x: 0,
				y: (Math.PI / 180) * 55,
				z: 0,
			}
		},
	]
}
