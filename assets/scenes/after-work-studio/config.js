var path = '/assets/scenes/after-work-studio/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/after-work-studio/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_After-Work_02.jpg'+compression,
      scale: 2.3,
      position: {
        x: -2,
        y: 1,
        z: 0.01,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_After-Work_05.jpg'+compression,
      scale: 2.3,
      position: {
        x: 0,
        y: 0.2,
        z: -2.7,
      },
      rotation: {
        x: 0,
        y: Math.PI/-1.1,
        z: 0,
      }
    },
    {
      path: cdn+'3d_After-Work_06.jpg'+compression,
      scale: 1.6,
      position: {
        x: 2.3,
        y: -0.3,
        z: -1.8,
      },
      rotation: {
        x: 0,
        y: Math.PI/3,
        z: 0,
      }
    },
    {
      path: cdn+'3d_After-Work_01.jpg'+compression,
      scale: 2.3,
      position: {
        x: 2.1,
        y: -0.2,
        z: 0,
      },
      rotation: {
        x: 0,
        y: Math.PI/1.5,
        z: 0,
      }
    },
    {
      path: cdn+'3d_After-Work_04.jpg'+compression,
      scale: 1.6,
      position: {
        x: 1.4,
        y: -0.3,
        z: 2,
      },
      rotation: {
        x: 0,
        y: Math.PI/4.2,
        z: 0,
      }
    },
    {
      path: cdn+'3d_After-Work_03.jpg'+compression,
      scale: 2.3,
      position: {
        x: -1.6,
        y: -0.3,
        z: 2.3,
      },
      rotation: {
        x: 0,
        y: Math.PI/1.1,
        z: 0,
      }
    }
  ],
  blobs: [
    {
      path: path+'after-work-studio.fbx',
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
