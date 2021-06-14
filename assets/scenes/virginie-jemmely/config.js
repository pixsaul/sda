var path = '/assets/scenes/virginie-jemmely/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/virginie-jemmely/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Virginie-Jemmely_01.jpg'+compression,
      scale: 2.4,
      position: {
        x: 2.5,
        y: -0.1,
        z: 1.6,
      },
      rotation: {
        x: 0,
        y: Math.PI/2,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Virginie-Jemmely_02.jpg'+compression,
      scale: 2.4,
      position: {
        x: 1.7,
        y: -0.1,
        z: -0.5,
      },
      rotation: {
        x: 0,
        y: -30*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Virginie-Jemmely_03.jpg'+compression,
      scale: 2.4,
      position: {
        x: 1.5,
        y: -0.1,
        z: -2.5,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virginie-Jemmely_04.jpg'+compression,
      scale: 2.5,
      position: {
        x: -1.3,
        y: -0.1,
        z: -1.8,
      },
      rotation: {
        x: 0,
        y: 50*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virginie-Jemmely_05.jpg'+compression,
      scale: 3.4,
      position: {
        x: -1.2,
        y: 0.5,
        z: 1.2,
      },
      rotation: {
        x: 0,
        y: 11*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virginie-Jemmely_06.jpg'+compression,
      scale: 1.6,
      position: {
        x: 1,
        y: -0.8,
        z: 2.5,
      },
      rotation: {
        x: 0,
        y: -40*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virginie-Jemmely_07.jpg'+compression,
      scale: 1.6,
      position: {
        x: -2.5,
        y: -0.8,
        z: -0,
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
      path: path+'Virginie-Jemmely.fbx',
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
],
videos: [
	{
      path: path+'3d_Virginie-Jemmely_BTS.mp4',
      scale: 1.4,
      position: {
        x: -2.5,
        y: -0.65,
        z: -2.5,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
]
}
