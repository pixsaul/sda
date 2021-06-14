var path = '/assets/scenes/maya-rochat/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/maya-rochat/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Maya-Rochat_01.jpg'+compression,
      scale: 1.9,
      position: {
        x: -1.7,
        y: -0.6,
        z: 2.64,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Maya-Rochat_02.jpg'+compression,
	  scale: 1.87 ,
 	 position: {
 	   x: -2.64,
 	   y: -0.6,
 	   z: 1.7,
 	 },
 	 rotation: {
 	   x: 0,
 	   y: Math.PI/2,
 	   z: 0,
 	 }
    },
    {
      path: cdn+'3d_Maya-Rochat_03.jpg'+compression,
      scale: 3.3,
      position: {
        x: -0.6,
        y: 1.2,
        z: 0.6,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Maya-Rochat_04.jpg'+compression,
	  scale: 1.9,
      position: {
        x: 1.7,
        y: -0.6,
        z: -2.64,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Maya-Rochat_05.jpg'+compression,
	  scale: 3.3,
      position: {
        x: 0.6,
        y: 1.2,
        z: -0.6,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Maya-Rochat_06.jpg'+compression,
	  scale: 1.82 ,
 	position: {
 	  x: 2.64,
 	  y: -0.6,
 	  z: -1.73,
 	},
 	rotation: {
 	  x: 0,
 	  y: Math.PI/2,
 	  z: 0,
 	}
    },
  ],
  blobs: [
    {
      path: path+'Maya-Rochat.fbx',
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
