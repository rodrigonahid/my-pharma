const router = require("express").Router();

const TokenMiddleware = require("./helpers/TokenMiddleware");

const AuthController = require("./controller/AuthController.js");
const ProductCategoryController = require("./controller/ProductCategoryController");
const BrandController = require("./controller/BrandController");
const ProductController = require("./controller/ProductController");

// Authentication
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

// Product Category
router.post(
  "/product-category",
  TokenMiddleware,
  ProductCategoryController.create
);
router.get(
  "/product-category",
  TokenMiddleware,
  ProductCategoryController.read
);
router.get(
  "/product-category/:id",
  TokenMiddleware,
  ProductCategoryController.readOne
);
router.patch(
  "/product-category",
  TokenMiddleware,
  ProductCategoryController.update
);
router.delete(
  "/product-category",
  TokenMiddleware,
  ProductCategoryController.delete
);

// Brand
router.post("/brand", BrandController.create);
router.get("/brand", BrandController.read);
router.get("/brand/:id", BrandController.readOne);
router.patch("/brand", BrandController.update);
router.delete("/brand", BrandController.delete);

// Product
router.post("/product", ProductController.create);
router.get("/product", ProductController.read);
router.get("/product/:id", ProductController.readOne);
router.patch("/product", ProductController.update);
router.delete("/product", ProductController.delete);

module.exports = router;
