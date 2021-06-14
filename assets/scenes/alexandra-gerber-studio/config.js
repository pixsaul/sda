var path = '/assets/scenes/alexandra-gerber-studio/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/alexandra-gerber-studio/'
var compression = '?width=800&quality=70'

roomConfig = {
  images: [
    {
      path: cdn+'3d_Alexandra-Gerber_01.jpg'+compression,
      scale: 2.3,
      position: {
        x: 1.5,
        y: -1.18,
        z: -1.5,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Alexandra-Gerber_02.jpg'+compression,
	  scale: 2.3,
 	 position: {
 	   x: -1.5,
 	   y: -1.18,
 	   z: 1.5,
 	 },
 	 rotation: {
 	   x: 0,
 	   y: Math.PI/4,
 	   z: 0,
 	 }
    },
    {
      path: cdn+'3d_Alexandra-Gerber_03.jpg'+compression,
	  scale: 2.3,
 	 position: {
 	   x: -1.5,
 	   y: -1.18,
 	   z: -1.5,
 	 },
 	 rotation: {
 	   x: 0,
 	   y: -Math.PI/4,
 	   z: 0,
 	 }
    },
    {
      path: cdn+'3d_Alexandra-Gerber_04.jpg'+compression,
	  scale: 2.3,
 	position: {
 	  x: 1.5,
 	  y: -1.18,
 	  z: 1.5,
 	},
 	rotation: {
 	  x: 0,
 	  y: -Math.PI/4,
 	  z: 0,
 	}
    },
    {
      path: cdn+'3d_Alexandra-Gerber_05.jpg'+compression,
	  scale: 2.3,
	position: {
	  x: -1.5,
	  y: 0.7,
	  z: 1.5,
	},
	rotation: {
	  x: 0,
	  y: Math.PI/4,
	  z: 0,
	}
    },
    {
      path: cdn+'3d_Alexandra-Gerber_06.jpg'+compression,
	  scale: 2.3,
 	 position: {
 	   x: 1.5,
 	   y: 0.7,
 	   z: -1.5,
 	 },
 	 rotation: {
 	   x: 0,
 	   y: Math.PI/4,
 	   z: 0,
 	 }
  },
  
  ],
  blobs: [
    {
      path: path+'Alexandra-Gerber.fbx',
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
  	path: path+'3d_Alexandra-Gerber_07.mp4',
  	scale: 1.5,
  	position: {
  	  x: 0,
  	  y: 1,
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
