const productsEx = require("../models/MongoSchema");
const { db } = require("../utils/dbMongo");

const goHome = async (req, res) => {
  let title = "HOME"
  res.render("home.pug", { page: title });
};

const getProducts = async (req, res) => {
  let data;
  try {
    if (req.params.name) {
      data = await productsEx.find({ name: req.params.name }, " -_id");
      console.log(data);
      res.status(200).json(data);
    } else {
      data = await productsEx.find({});
      let title = "PRODUCTS"
      res.render("products.pug", { products: data, page: title });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
const createProduct = async (req, res) => {
  try {
    res.render("create_products.pug");
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
const createNewProduct = async (req, res) => {
  try {
    const newP = req.body;
    let data = await productsEx.create(newP);
    data = await productsEx.find({});
    res.render("create_products.pug", { products: data });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const editProduct = async (req, res) => {
  try {
    let query = { id: req.params.name };
    let update = req.body;
    const result = await productsEx.findOneAndUpdate(query, update, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({ message: "modificated product" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productsEx.deleteOne({ name: req.params.name });
    res.status(200).send("deleted Product");
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = {
  createNewProduct,
  goHome,
  createProduct,
  getProducts,
  editProduct,
  deleteProduct,
};
