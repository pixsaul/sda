var path = '/assets/scenes/marwan-bassiouni/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/marwan-bassiouni/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Marwan-Bassiouni_01.jpg'+compression,
	  scale: 3.1,
      position: {
        x: 0,
        y: 0.1,
        z: -2.5,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Marwan-Bassiouni_02.jpg'+compression,
	  scale: 3.1,
 	 position: {
 	   x: -2.5,
 	   y: 0.1,
 	   z: 0,
 	 },
 	 rotation: {
 	   x: 0,
 	   y: Math.PI/2,
 	   z: 0,
 	 }
    },
    {
      path: cdn+'3d_Marwan-Bassiouni_03.jpg'+compression,
	 scale: 3.1,
	position: {
	  x: 2.5,
	  y: 0.1,
	  z: 0,
	},
	rotation: {
	  x: 0,
	  y: Math.PI/2,
	  z: 0,
	}
    },
	{
      path: cdn+'3d_Marwan-Bassiouni_04.jpg'+compression,
      scale: 3.1,
      position: {
        x: 0,
        y: 0.1,
        z: 2.5,
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
      path: path+'Marwan-Bassiouni.fbx',
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
