var path = '/assets/scenes/chaumont-zaerpour/'
roomConfig = {
  images: [
    {
      path: path+'3d_Chaumont-Zaerpour_01.jpeg',
      scale: 2.9,
      position: {
        x: -0.1,
        y: -0.2,
        z: -1.2,
      },
      rotation: {
        x: 0,
        y: 30*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_Chaumont-Zaerpour_02.jpeg',
	  scale: 2.9,
	  position: {
		x: 1.5,
		y: -0.2,
		z: 0.4,
	  },
	  rotation: {
		x: 0,
		y: -80*Math.PI/180,
		z: 0,
	  }
    },
    {
      path: path+'3d_Chaumont-Zaerpour_03.jpeg',
	  scale: 2.9,
 	 position: {
 	   x: -1.5,
 	   y: -0.2,
 	   z: 0.8,
 	 },
 	 rotation: {
 	   x: 0,
 	   y: -75*Math.PI/180,
 	   z: 0,
 	 }
    },
  ],
  blobs: [
    {
      path: path+'Chaumont-Zaerpour.fbx',
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
