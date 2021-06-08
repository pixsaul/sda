var path = '/assets/scenes/data-orbit/'
roomConfig = {
  images: [
    {
      path: path+'3d_Data-Orbit_1.jpg',
      scale: 3.2,
      position: {
        x: 2,
        y: 1,
        z: 0.4,
      },
      rotation: {
        x: 0,
        y: 18.4*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_Data-Orbit_2.jpg',
      scale: 3.2,
      position: {
		  x: -1.5,
          y: 0.6,
          z: -0.4,
      },
      rotation: {
        x: 0,
        y: -71.9*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_Data-Orbit_3.jpg',
      scale: 3.2,
      position: {
        x: -0.5,
        y: -0.4,
        z: 1.8,
      },
      rotation: {
        x: 0,
        y: -17.8*Math.PI/180,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Data-Orbit.fbx',
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
