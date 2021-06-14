var path = '/assets/scenes/hannes-gloor/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/hannes-gloor/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Hannes_Gloor_1.png'+compression,
      scale: 2.8,
      position: {
        x: -0.9,
        y: -0.6,
        z: 1.1,
      },
      rotation: {
        x: 0,
        y: 15.6*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Hannes_Gloor_2.png'+compression,
      scale: 2.5,
      position: {
        x: 1.4,
        y: 0.4,
        z: 0.8,
      },
      rotation: {
        x: 0,
        y: -68.3*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Hannes_Gloor_3.png'+compression,
      scale: 3.2,
      position: {
        x: 1,
        y: 1.6,
        z: -1,
      },
      rotation: {
        x: 0,
        y: 23.7*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Hannes_Gloor_4.png'+compression,
      scale: 2.8,
      position: {
        x: -1,
        y: 0.6,
        z: -0.4,
      },
      rotation: {
        x: 0,
        y: -44*Math.PI/180,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Hannes-Gloor.fbx',
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
