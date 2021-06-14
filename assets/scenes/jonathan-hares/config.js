var path = '/assets/scenes/jonathan-hares/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/jonathan-hares/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Jonathan-Hares_1.png'+compression,
      scale: 5.2,
      position: {
        x: 0,
        y: 0.7,
        z: 0,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Jonathan-Hares_2.png'+compression,
      scale: 5.2,
      position: {
        x: 0,
        y: 0.7,
        z: 0,
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
      path: cdn+'jonathan-hares.fbx',
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
