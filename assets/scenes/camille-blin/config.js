var path = '/assets/scenes/camille-blin/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/camille-blin/'
var compression = '?width=800&quality=70'
roomConfig = {
	images: [
		{
			path: cdn+'3d_Camille-Blin_01.jpg'+compression,
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
			path: cdn+'3d_Camille-Blin_02.jpg'+compression,
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
