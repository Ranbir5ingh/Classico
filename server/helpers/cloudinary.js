const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dapuphxaa",
  api_key: "444531955345576",
  api_secret: "tdjAJAbBrqXn4kUiQaKLFxKLGo0",
});

const storage = new multer.memoryStorage();

async function ImageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({storage})

module.exports = {upload, ImageUploadUtil}
