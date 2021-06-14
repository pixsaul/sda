var path = '/assets/scenes/annina-arter/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/annina-arter/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Annina-Arter_01.jpg'+compression,
      scale: 2.6,
      position: {
        x: 2,
        y: -0.2,
        z: 1,
      },
      rotation: {
        x: 0,
        y: (Math.PI / 180) * 32.9,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Annina-Arter_02.jpg'+compression,
      scale: 1.6,
      position: {
        x: -1.6,
        y: -0.8,
        z: 1,
      },
      rotation: {
        x: 0,
        y: (Math.PI / 180) * 12.9,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Annina-Arter_05.jpg'+compression,
      scale: 2.3,
      position: {
        x: -0.7,
        y: -0.8,
        z: 0,
      },
      rotation: {
        x: 0,
        y: (Math.PI / 180) * -29.5,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Annina-Arter_03.jpg'+compression,
      scale: 2.3,
      position: {
        x: -1.4,
        y: -0.8,
        z: -1.6,
      },
      rotation: {
        x: 0,
        y: (Math.PI / 180) * 23.9,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Annina-Arter_04.jpg'+compression,
      scale: 3.2,
      position: {
        x: 1.4,
        y: 0.2,
        z: -1.7,
      },
      rotation: {
        x: 0,
        y: (Math.PI / 180) * 30.5,
        z: 0,
      }
    }
  ],
  blobs: [
    {
      path: path+'annina-arter.fbx',
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
