var path = '/assets/scenes/mathias-renner/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/mathias-renner/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Mathias-Renner_01.jpg'+compression,
      scale: 3.75,
      position: {
        x: 0,
        y: 0.4,
        z: -2.5,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Mathias-Renner_02.jpg'+compression,
	  scale: 3.75,
      position: {
        x: -2.50,
        y: 0.3,
        z: 0,
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
      path: path+'Mathias-Renner.fbx',
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
