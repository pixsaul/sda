var path = '/assets/scenes/omnigroup/'
roomConfig = {
  images: [
    {
      path: path+'3d_Omnigroup_01.jpg',
      scale: 2.2,
      position: {
        x: 1.5,
        y: 0.6,
        z: -1.5,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: path+'3d_Omnigroup_02.jpg',
      scale: 2.7,
      position: {
        x: 1.3,
        y: 0.1,
        z: 1.3,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
	{
      path: path+'3d_Omnigroup_03.jpg',
	  scale: 2.7,
 	 position: {
 	   x: -1.3,
 	   y: 0.1,
 	   z: -1.3,
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
      path: path+'Omnigroup.fbx',
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
