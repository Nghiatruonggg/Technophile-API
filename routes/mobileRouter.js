const express = require('express');
const {
  getAllProduct,
  getProductByID,
  addNewProduct,
  editProduct,
  deleteProduct,
  addParams,
} = require('../controller/mobileController');

const mobileRouter = express.Router();

mobileRouter.route('/top-5-products').get(addParams, getAllProduct);

mobileRouter.route('/').get(getAllProduct).post(addNewProduct);
mobileRouter
  .route('/:id')
  .get(getProductByID)
  .patch(editProduct)
  .delete(deleteProduct);



module.exports = mobileRouter;
