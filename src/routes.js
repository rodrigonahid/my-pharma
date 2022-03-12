const router = require("express").Router();

const AuthController = require("./controller/AuthController.js");
const ProductCategoryController = require("./controller/ProductCategoryController");
const BrandController = require("./controller/BrandController");

// Authentication
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

// Product Category
router.post("/product-category", ProductCategoryController.create);
router.get("/product-category", ProductCategoryController.read);
router.get("/product-category/:id", ProductCategoryController.readOne);
router.patch("/product-category", ProductCategoryController.update);
router.delete("/product-category", ProductCategoryController.delete);

// Brand
router.post("/brand", BrandController.create);
router.get("/brand", BrandController.read);
router.get("/brand/:id", BrandController.readOne);
router.patch("/brand", BrandController.update);
router.delete("/brand", BrandController.delete);

module.exports = router;
