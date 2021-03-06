var path = '/assets/scenes/clio-hadjigeorgiou/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/clio-hadjigeorgiou/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Clio-Hadjigeorgiou_1.png'+compression,
      scale: 2.7,
      position: {
        x: 1.7,
        y: 0,
        z: 1.7,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Clio-Hadjigeorgiou_2.png'+compression,
	  scale: 2.7,
      position: {
        x: -1.7,
        y: 0,
        z: -1.7,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Clio-Hadjigeorgiou_3.png'+compression,
	  scale: 2.7,
 	 position: {
 	   x: -1.7,
 	   y: 0,
 	   z: 1.7,
 	 },
 	 rotation: {
 	   x: 0,
 	   y: -Math.PI/4,
 	   z: 0,
 	 }
    },
    {
      path: cdn+'3d_Clio-Hadjigeorgiou_4.png'+compression,
	  scale: 2.7,
      position: {
        x: 1.7,
        y: 0,
        z: -1.7,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Clio-Hadjigeorgiou.fbx'+compression,
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
