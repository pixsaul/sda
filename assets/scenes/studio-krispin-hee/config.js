var path = '/assets/scenes/studio-krispin-hee/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/studio-krispin-hee/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Krispin-Hee_01.jpg'+compression,
      scale: 3.6,
      position: {
        x: 1.23,
        y: 0.35,
        z: -0.05,
      },
      rotation: {
        x: 0,
        y: 103*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Krispin-Hee_02.jpg'+compression,
      scale: 3.6,
      position: {
        x: -0.487,
        y: 0.35,
        z: -0.595,
      },
      rotation: {
        x: 0,
        y: -137*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Krispin-Hee_03.jpg'+compression,
      scale: 3.6,
      position: {
        x: -0.1,
        y: 0.35,
        z: 1.161,
      },
      rotation: {
        x: 0,
        y: -17.2*Math.PI/180,
        z: 0,
      }
    },
	
  ],
  blobs: [
    {
      path: path+'Krispin-Hee.fbx',
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
