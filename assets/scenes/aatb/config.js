var path = '/assets/scenes/aatb/'
var cdn = 'https://media-196c5.kxcdn.com//assets/scenes/aatb/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_AATB_01.jpg'+compression,
      scale: 2.6,
      position: {
        x: -1.5,
        y: 0.7,
        z: -2,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_AATB_02.jpg'+compression,
      scale: 2.3,
      position: {
        x: -0.5,
        y: -0.8,
        z: -0.5,
      },
      rotation: {
        x: 0,
        y: 80*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_AATB_03.jpg'+compression,
	  scale: 2.3,
      position: {
        x: 0.5,
        y: -0.8,
        z: -0.5,
      },
      rotation: {
        x: 0,
        y: -80*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_AATB_04.jpg'+compression,
	  scale: 2.6,
      position: {
        x: 1.5,
        y: 0.7,
        z: -2,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'AATB.fbx',
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
