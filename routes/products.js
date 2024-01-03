const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductstesing,
} = require("../controllers/products.js");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductstesing);

module.exports = router;