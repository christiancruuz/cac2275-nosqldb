/** server/controllers/article.ctrl.js*/
const Product = require("../models/Product");
const Profile = require("../models/Profile");
const fs = require("fs");
const cloudinary = require("cloudinary");
module.exports = {
  addProduct: (req, res, next) => {
    let { title, price, description, likes } = req.body;
    if (req.files.image) {
      cloudinary.uploader.upload(
        req.files.image.path,
        result => {
          let obj = {
            title,
            price,
            description,
            likes,
            product_img: result.url != null ? result.url : ""
          };
          saveProduct(obj);
        },
        {
          resource_type: "image",
          eager: [{ effect: "sepia" }]
        }
      );
    } else {
      saveProduct({
        title,
        price,
        description,
        likes,
        product_img: ""
      });
    }
    function saveProduct(obj) {
      new Product(obj).save((err, product) => {
        if (err) res.send(err);
        else if (!product) res.send(400);
        else {
          return product.addAuthor(req.body.author_id).then(_product => {
            return res.send(_product);
          });
        }
        next();
      });
    }
  },
  getAll: (req, res, next) => {
    Product.find(req.params.id)
      .populate("designer")
      .populate("comments.author")
      .exec((err, product) => {
        if (err) res.send(err);
        else if (!product) res.send(404);
        else res.send(product);
        next();
      });
  },
  /**
   * article_id
   */
  likeProduct: (req, res, next) => {
    Product.findById(req.body.product_id)
      .then(product => {
        return product.like().then(() => {
          return res.json({ msg: "Done" });
        });
      })
      .catch(next);
  },
  /**
   * comment, author_id, article_id
   */
  commentProduct: (req, res, next) => {
    Product.findById(req.body.product_id)
      .then(product => {
        return product
          .comment({
            author: req.body.author_id,
            text: req.body.comment
          })
          .then(() => {
            return res.json({ msg: "Done" });
          });
      })
      .catch(next);
  },
  /**
   * article_id
   */
  getProduct: (req, res, next) => {
    Product.findById(req.params.id)
      .populate("designer")
      .populate("comments.author")
      .exec((err, product) => {
        if (err) res.send(err);
        else if (!product) res.send(404);
        else res.send(product);
        next();
      });
  }
};
