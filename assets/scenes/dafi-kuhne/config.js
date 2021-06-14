var path = '/assets/scenes/dafi-kuhne/'
var path = '/assets/scenes/dafi-kuhne/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/dafi-kuhne/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Dafi-Kuhne_1.png'+compression,
      scale: 2.8,
      position: {
        x: -0.9,
        y: -0.2,
        z: 1.7,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Dafi-Kuhne_2.png'+compression,
      scale: 3.5,
      position: {
		  x: -1.5,
          y: 1.3,
          z: 0.6,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Dafi-Kuhne_3.png'+compression,
      scale: 2.7,
      position: {
		  x: -0.9,
          y: -0.2,
          z: -1.7,
      },
      rotation: {
		  x: 0,
          y: Math.PI-Math.PI/4,
          z: 0,
      }
    },
    {
      path: cdn+'3d_Dafi-Kuhne_4.png'+compression,
      scale: 2.9,
      position: {
		  x: 1.9,
          y: 0.6,
          z: 1.7,
      },
      rotation: {
		  x: 0,
 		 y: Math.PI-Math.PI/4,
 		 z: 0,
      }
    },
	{
      path: cdn+'3d_Dafi-Kuhne_5.png'+compression,
      scale: 2.3,
      position: {
		  x: 1.9,
 		 y: 0.6,
 		 z: -1.7,
      },
      rotation: {
		  x: 0,
          y: Math.PI/4,
          z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Dafi-Kuhne.fbx',
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
    },
  ]
}
