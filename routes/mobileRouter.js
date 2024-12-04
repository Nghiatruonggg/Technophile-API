const express = require('express');
const { getAllProduct, getProductByID, addNewProduct, editProduct, deleteProduct } = require('../controller/mobileController');
const mobileRouter = express.Router();

mobileRouter.route('/').get(getAllProduct).post(addNewProduct);
mobileRouter.route('/:id').get(getProductByID).patch(editProduct).delete(deleteProduct);

module.exports = mobileRouter;
