var path = '/assets/scenes/fabien-roy-studio/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/fabien-roy-studio/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Fabien-Roy_01.jpg'+compression,
      scale: 1.8,
      position: {
        x: 0.9,
        y: -0.4,
        z: -0.3,
      },
      rotation: {
        x: 0,
        y: 22.7*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Fabien-Roy_02.jpg'+compression,
      scale: 1.8,
      position: {
        x: -0.5,
        y: 1.0,
        z: 0.8,
      },
      rotation: {
        x: 0,
        y: 67.7*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Fabien-Roy_03.jpg'+compression,
      scale: 1.8,
      position: {
        x: -1.15,
        y: 2.0,
        z: -0.66,
      },
      rotation: {
        x: 0,
        y: -22.3*Math.PI/180,
        z: 0,
      }
    },
  {
      path: cdn+'3d_Fabien-Roy_04.jpg'+compression,
      scale: 1.8,
      position: {
        x: -1.15,
        y: 2.0,
        z: -0.66,
      },
      rotation: {
        x: 0,
        y: -22.3*Math.PI/180,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Fabien-Roy.fbx',
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
