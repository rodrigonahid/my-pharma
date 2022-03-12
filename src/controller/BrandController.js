const BrandSchema = require("../models/brand");

const BrandController = {
  create: async (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ err: "Fill the form" });
    }

    const brand = new BrandSchema({
      name,
    });

    try {
      await brand.save();
      return res.json({ err: null, brand });
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  },
  read: async (req, res) => {
    // const name = req.query.name;
    // const desc = req.query.desc;

    const brand = await BrandSchema.find({});

    return res.json({ err: null, brand });
  },
  readOne: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ err: "Bad request" });
    }
    try {
      const brand = await BrandSchema.findOne({ _id: id });
      return res.json({ err: null, brand });
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  },
  update: async (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
      return res.status(400).json({ err: "Fill the form" });
    }
    try {
      const updatedBrand = await BrandSchema.findByIdAndUpdate(id, { name });
      return res.json({ err: null, brand: { name: name, _id: id } });
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ err: "Fill the form" });
    }

    try {
      const deleted = await BrandSchema.findOneAndDelete({ _id: id });
      res.json({ err: null, deleted });
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  },
};

module.exports = BrandController;
