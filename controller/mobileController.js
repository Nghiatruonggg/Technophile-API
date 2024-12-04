const mongoose = require('mongoose');
const mobileModel = require('../models/mobileModel');

exports.getAllProduct = async (req, res) => {
  try {
    const mobileData = await mobileModel.find();
    res.status(200).json({
      status: 'success',
      data: {
        results: mobileData.length,
        mobile: mobileData,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getProductByID = async (req, res) => {
  const { id } = req.params;
  try {
    const mobile = await mobileModel.findById(id);
    res.status(200).json({
      status: 'success',
      data: {
        mobile: mobile,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.addNewProduct = async (req, res) => {
  try {
    const newMobile = await mobileModel.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newMobile,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.editProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const edittedProduct = await mobileModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: 'success',
      data: {
        edittedProduct,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await mobileModel.findByIdAndDelete(id);
    res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
