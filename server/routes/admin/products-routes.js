const express = require("express");
const { upload } = require("../../helpers/cloudinary");
const {
  handleImageUpload,
  editProduct,
  addProduct,
  deleteProduct,
  fetchAllProducts,
} = require("../../controllers/admin/products-controller");

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);

router.put("/edit/:id", editProduct);
router.post("/add", addProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get", fetchAllProducts);
module.exports = router;
