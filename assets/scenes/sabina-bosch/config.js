var path = '/assets/scenes/sabina-bosch/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/sabina-bosch/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Sabina-Bosch_01.jpg'+compression,
      scale: 2.7,
      position: {
        x: 0.9,
        y: -0.1,
        z: 0.9,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Sabina-Bosch_02.jpg'+compression,
	  scale: 2.7,
      position: {
        x: -0.9,
        y: -0.1,
        z: -0.9,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Sabina-Bosch_03.jpg'+compression,
	  scale: 2.7,
      position: {
        x: -0.7,
        y: -0.1,
        z: -0.7,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Sabina-Bosch_04.jpg'+compression,
      scale: 3.0,
      position: {
        x: 0.7,
        y: -0.1,
        z: 0.7,
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
      path: path+'Sabina-Bosch.fbx',
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
],
}
