var path = '/assets/scenes/julia-seemann/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/julia-seemann/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Julia-Seeman_05.jpg'+compression,
      scale: 2,
      position: {
        x: 0,
        y: 0,
        z: 0.4,
      },
      rotation: {
        x: 0,
        y: (Math.PI / 180) * 12,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Julia-Seeman_07.jpg'+compression,
      scale: 1.2,
      position: {
        x: 0.6,
        y: -1,
        z: 2,
      },
      rotation: {
        x: 0,
        y: (Math.PI / 180) * 30,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Julia-Seeman_08.jpg'+compression,
      scale: 2.3,
      position: {
        x: -1.1,
        y: -1.5,
        z: 1.5,
      },
      rotation: {
        x: 0,
        y: (Math.PI / 180) * -25.1,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Julia-Seeman_01.jpg'+compression,
      scale: 1.6,
      position: {
        x: 1.5,
        y: 0,
        z: 1,
      },
      rotation: {
        x: 0,
        y: -1.8326,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Julia-Seeman_02.jpg'+compression,
      scale: 1.6,
      position: {
        x: 1.4,
        y: 1,
        z: -1.4,
      },
      rotation: {
        x: 0,
        y: -0.889073,
        z: 0,
      }
    },
    {
    path: cdn+'3d_Julia-Seeman_03.jpg'+compression,
    scale: 1.6,
    position: {
      x: -0.3,
      y: 1,
      z: -1.4,
    },
    rotation: {
      x: 0,
      y: 0.436332,
      z: 0,
    }
  },
  {
    path: cdn+'3d_Julia-Seeman_04.jpg'+compression,
    scale: 1.6,
    position: {
      x: -1.6,
      y: 0,
      z: -0.4,
    },
    rotation: {
      x: 0,
      y: -1.26047,
      z: 0,
    }
  },
  {
    path: cdn+'3d_Julia-Seeman_06.jpg'+compression,
    scale: 1.2,
    position: {
      x: 0.6,
      y: 1,
      z: -0.35,
    },
    rotation: {
      x: 0,
      y: -1.0472,
      z: 0,
    }
  }
  ],
  blobs: [
    {
      path: path+'julia-seemann.fbx',
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
