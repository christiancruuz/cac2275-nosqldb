// server/routes/article.js
const productcontroller = require("../../controllers/product.ctrl");
const multipart = require("connect-multiparty");
const multipartWare = multipart();
module.exports = router => {
  /**
   * get all articles
   */
  router.route("/products").get(productcontroller.getAll);
  /**
   * add an article
   */
  router.route("/product").post(multipartWare, productcontroller.addProduct);
  /**
   * comment on an article
   */
  router.route("/product/comment").post(productcontroller.commentProduct);
  /**
   * get a particlular article to view
   */
  router.route("/product/:id").get(productcontroller.getProduct);
};
