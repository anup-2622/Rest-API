const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, feature, sort, select } = req.query; // searching functionality
  const queryObect = {};
  if (company) {
    queryObect.company = company;
  }
  if (feature) {
    queryObect.feature = feature;
  }

  if (name) {
    queryObect.name = { $regex: name, $options: "i" };
  }
  let apiqueryRes = Product.find(queryObect);

  if (sort) {
    // let sortFix = sort.replace(",", " ");
    let sortFix = sort.split(",").join(" ");
    // queryObect.sort = sortFix;
    apiqueryRes = apiqueryRes.sort(sortFix);
  }
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");

    apiqueryRes = apiqueryRes.select(selectFix);
  }
  if (sort) {
    queryObect.sort = sort;
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;
  apiqueryRes = apiqueryRes.skip(skip).limit(limit);
  // console.log(queryObect);
  const Products = await apiqueryRes;
  res.status(200).json({ Products, nbHits: Products.length });
};
const getAllProductstesing = async (req, res) => {
  const myTesting = await Product.find(req.query).skip(2); //sorting functionality
  // console.log(req.query);
  res.status(200).json({ myTesting });
};

// Inserting data to the Database
const insertProducts = async (req, res) => {
  const proData = new Product(req.body);
  await proData.save();

  res.send({
    success: true,
    message: "data added successfully ",
    data: proData,
  });
};
module.exports = { getAllProducts, getAllProductstesing, insertProducts };
