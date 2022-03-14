const ProductCategorySchema = require("../models/productCategory");

const ProductCategoryController = {
  create: async (req, res) => {
    const { name, description } = req.body;
    const isRegistered = await ProductCategorySchema.findOne({ name });

    if (!name || !description) {
      return res.status(400).json({ err: "Fill the form" });
    }

    if (isRegistered) {
      return res.status(400).json({ err: "Product already registered" });
    }

    const productCategory = new ProductCategorySchema({
      name,
      description,
    });
    try {
      await productCategory.save();
      res.json({
        err: null,
        mgs: "Categoria de produto registrada com sucesso",
        productCategory,
      });
    } catch (err) {
      return res.status(400).json({ err: err });
    }
  },
  read: async (req, res) => {
    // const name = req.query.name;
    // const desc = req.query.desc;

    const productCategories = await ProductCategorySchema.find({});

    return res.json({ err: null, data: productCategories });
  },
  readOne: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ err: "Bad request" });
    }
    try {
      const productCategory = await ProductCategorySchema.findOne({ _id: id });
      return res.json({ err: null, productCategory });
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  },
  update: async (req, res) => {
    const { id, name, description } = req.body;

    try {
      const updatedProductCategory =
        await ProductCategorySchema.findOneAndUpdate(
          { _id: id },
          { $set: { name, description } },
          { new: true }
        );
      res.json({
        err: false,
        productCategory: updatedProductCategory,
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
      const deleted = await ProductCategorySchema.findOneAndDelete({ _id: id });
      return res.json({ err: null, deleted });
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  },
};

module.exports = ProductCategoryController;
