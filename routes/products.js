const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductstesing,
  insertProducts,
} = require("../controllers/products.js");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductstesing);
// router.route("/insert").post(insertProducts);

module.exports = router;
