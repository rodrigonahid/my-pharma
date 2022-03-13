const ProductSchema = require("../models/products");

const ProductCategoryController = {
  create: async (req, res) => {
    const { name, description, value, stock, category, brand } = req.body;

    const productCategory = new ProductSchema({
      name,
      description,
      value,
      stock,
      category,
      brand,
    });

    try {
      await productCategory.save();
      res.json({
        err: null,
        mgs: "Product registered successfully",
        productCategory,
      });
    } catch (err) {
      return res.status(400).json({ err: err });
    }
  },
  read: async (req, res) => {
    const product = await ProductSchema.find({});

    return res.json({ err: null, product });
  },
  readOne: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ err: "Bad request" });
    }
    try {
      const product = await ProductSchema.findOne({ _id: id });
      return res.json({ err: null, product });
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  },
  update: async (req, res) => {
    const { id, name, description, value, stock, category, brand } = req.body;

    try {
      const updatedProduct = await ProductSchema.findOneAndUpdate(
        { _id: id },
        { $set: { name, description, value, stock, category, brand } },
        { new: true }
      );
      res.json({
        err: false,
        product: updatedProduct,
      });
    } catch (err) {
      return res.status(400).json({ err: err });
    }
  },
  delete: async (req, res) => {
    const { id } = req.body;
    if (!id) {
      res.status(400).json({ err: "Fill the form" });
    }
    try {
      const deleted = await ProductSchema.findOneAndDelete({ _id: id });
      return res.json({ err: null, deleted });
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  },
};

module.exports = ProductCategoryController;
