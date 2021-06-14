var path = '/assets/scenes/clement-lambelet/'
var path = '/assets/scenes/clement-lambelet/'
var path = '/assets/scenes/clement-lambelet/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/clement-lambelet/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Clement-Lambelet_01.jpg'+compression,
      scale: 1.8,
      position: {
        x: 2.1,
        y: -0.9,
        z: 2.1,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Clement-Lambelet_02.jpg'+compression,
	  scale: 2.7,
      position: {
        x: 1.5,
        y: -0.3,
        z: 1.5,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Clement-Lambelet_03.jpg'+compression,
	  scale: 2.0,
      position: {
        x: 0.5,
        y: -0.75,
        z: -0.5,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Clement-Lambelet_04.jpg'+compression,
	  scale: 2.0,
      position: {
        x: -0.5,
        y: -0.75,
        z: 0.5,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Clement-Lambelet_05.jpg'+compression,
	  scale: 2.7,
      position: {
        x: -1.5,
        y: -0.3,
        z: -1.5,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Clement-Lambelet_06.jpg'+compression,
	  scale: 1.8,
 	 position: {
 	   x: -2.1,
 	   y: -0.9,
 	   z: -2.1,
 	 },
 	 rotation: {
 	   x: 0,
 	   y: Math.PI/4,
 	   z: 0,
 	 }
    }
  ],
  blobs: [
    {
      path: path+'Clement-Lambelet.fbx',
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
