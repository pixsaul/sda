var path = '/assets/scenes/cristian-andersen/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/cristian-andersen/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Cristian-Andersen_01.jpg'+compression,
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
      path: cdn+'3d_Cristian-Andersen_02.jpg'+compression,
	  scale: 2.7,
      position: {
        x: 1.7,
        y: -0.3,
        z: -1.7,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Cristian-Andersen_03.jpg'+compression,
	  scale: 2.7,
 	 position: {
 	   x: 0,
 	   y: -0.3,
 	   z: 0,
 	 },
 	 rotation: {
 	   x: 0,
 	   y: -Math.PI/4,
 	   z: 0,
 	 }
    },
    {
      path: cdn+'3d_Cristian-Andersen_04.jpg'+compression,
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
      path: cdn+'3d_Cristian-Andersen_05.jpg'+compression,
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
  ],
  blobs: [
    {
      path: path+'Cristian-Andersen.fbx',
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
