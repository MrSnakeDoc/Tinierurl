const { cloud_name,  api_key, api_secret} = require('../config');
const cloudinary = require('cloudinary');
cloudinary.config({cloud_name, api_key, api_secret,});

module.exports = {
  cloudCreate: async (data) => {
    cloudinary.image(data);
    const result = await cloudinary.uploader.upload(data, {});
    return result.url;		
  },
  // cloudUpdate: async (id, data) => {
  //   // recuperer url par l'id
  //   const oldImg = await 'requete';
  //   await cloudinary.uploader.destroy(oldImg, function(result) { console.log(result) });
  //   await cloudinary.image(data);
  //   const result = await cloudinary.uploader.upload(data, {});
  //   return result.url;		
  // },
  // cloudDelete: async (id, data) => {
  //   await cloudinary.uploader.destroy(oldImg, function(result) { console.log(result) });
  //   return;		
  // },
};
// cloudinary.image(data, {width: 500, height: 500 });