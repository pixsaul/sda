var path = '/assets/scenes/marwan-bassiouni/'
roomConfig = {
  images: [
    {
      path: path+'3d_Marwan-Bassiouni_01.jpg',
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
      path: path+'3d_Marwan-Bassiouni_02.jpg',
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
      path: path+'3d_Marwan-Bassiouni_03.jpg',
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
      path: path+'3d_Marwan-Bassiouni_04.jpg',
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
