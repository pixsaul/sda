var path = '/assets/scenes/marc-asekhame/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/marc-asekhame/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Marc-Asekhame_01.jpg'+compression,
      scale: 2.4,
      position: {
        x: 0,
        y: -0.4,
        z: 0.00,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Marc-Asekhame_02.jpg'+compression,
      scale: 2.9,
      position: {
        x: 1.5,
        y: -0.2,
        z: -1.5,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Marc-Asekhame_03.jpg'+compression,
	  scale: 2.9,
      position: {
        x: -1.5,
        y: -0.2,
        z: 1.5,
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
      path: path+'Marc-Asekhame.fbx',
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
