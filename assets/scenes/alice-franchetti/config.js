var path = '/assets/scenes/alice-franchetti/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/alice-franchetti/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Alice-Franchetti_1.jpg'+compression,
      scale: 2.6,
      position: {
        x: 1.2,
        y: 0.8,
        z: 1.2,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Alice-Franchetti_2.jpg'+compression,
      scale: 2.6,
      position: {
        x: -1.2,
        y: 0.8,
        z: -1.2,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Alice-Franchetti_5.jpg'+compression,
      scale: 2.6,
      position: {
        x: -1,
        y: -0.8,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Alice-Franchetti_6.jpg'+compression,
      scale: 2.6,
      position: {
        x: 1,
        y: -0.8,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Alice-Franchetti_7.jpg'+compression,
      scale: 2.6,
      position: {
        x: 0,
        y: -0.8,
        z: -1,
      },
      rotation: {
        x: 0,
        y: 1.5708,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Alice-Franchetti_8.jpg'+compression,
      scale: 2.6,
      position: {
        x: 0,
        y: -0.8,
        z: 1,
      },
      rotation: {
        x: 0,
        y: 1.5708,
        z: 0,
      }
    }
  ],
  blobs: [
    {
      path: path+'alice-franchetti.fbx',
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
    }
  ]
}
