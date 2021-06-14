var path = '/assets/scenes/luca-schenardi/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/luca-schenardi/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Luca-Schenardi_01.jpg'+compression,
      scale: 3.8,
      position: {
        x: -1.2,
        y: -0.6,
        z: 1.2,
      },
      rotation: {
        x: 0,
        y: -45*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Luca-Schenardi_02.jpg'+compression,
      scale: 2.2,
      position: {
        x: -2.7,
        y: -0.9,
        z: -1.8,
      },
      rotation: {
        x: 0,
        y: 80*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Luca-Schenardi_03.jpg'+compression,
      scale: 1.6,
      position: {
        x: 2.1,
        y: -0.8,
        z: 0.4,
      },
      rotation: {
        x: 0,
        y: 30*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Luca-Schenardi_04.jpg'+compression,
      scale: 3.0,
      position: {
        x: 1.8,
        y: -0.3,
        z: -1.5,
      },
      rotation: {
        x: 0,
        y: 43.7*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Luca-Schenardi_05.jpg'+compression,
      scale: 2.4,
      position: {
        x: 0.25,
        y: 0.4,
        z: -2.6,
      },
      rotation: {
        x: 0,
        y: -12*Math.PI/180,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Luca-Schenardi.fbx',
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
