var path = '/assets/scenes/valentin-woeffray/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/valentin-woeffray/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Valentin-Woeffray_01.jpg'+compression,
      scale: 3.3,
      position: {
        x: 0,
        y: -1.1,
        z: -1,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Valentin-Woeffray_02.jpg'+compression,
      scale: 3.2,
      position: {
        x: 2,
        y: 0.2,
        z: -0.5,
      },
      rotation: {
        x: 0,
        y: 90*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Valentin-Woeffray_03.jpg'+compression,
	  scale: 3.6,
	  position: {
		x: -1.7,
		y: 0.6,
		z: -0.7,
	  },
	  rotation: {
		x: 0,
		y: 90*Math.PI/180,
		z: 0,
	  }
    },
	{
      path: cdn+'3d_Valentin-Woeffray_04.jpg'+compression,
      scale: 3.4,
      position: {
        x: 0,
        y: -1.05,
        z: 1,
      },
      rotation: {
        x: 0,
        y: 90*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Valentin-Woeffray_05.jpg'+compression,
      scale: 4,
      position: {
        x: 1,
        y: -0.88,
        z: -3,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Valentin-Woeffray_06.jpg'+compression,
      scale: 3.3,
      position: {
        x: 1.5,
        y: -1.05,
        z: 2,
      },
      rotation: {
        x: 0,
        y: 30*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Valentin-Woeffray_07.jpg'+compression,
	  scale: 2.6,
	  position: {
		x: -2,
		y: -1.2,
		z: 2,
	  },
	  rotation: {
		x: 0,
		y: -45*Math.PI/180,
		z: 0,
	  }
    },
  ],
  blobs: [
    {
      path: path+'Valentin-Woeffray.fbx',
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
}
