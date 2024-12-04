const mongoose = require('mongoose');
const { Schema } = mongoose;

const mobileSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Must have product name'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Must have price'],
  },
  mainImage: {
    type: String,
    required: [true, 'Must have photo'],
  },
  phone_type: {
    type: String,
    required: [true, 'Must have a phone type'],
  },
  thumbnail_1: {
    type: String,
    required: [true, 'Must have thumbnail'],
  },
  thumbnail_2: {
    type: String,
    required: [true, 'Must have thumbnail'],
  },
  thumbnail_3: {
    type: String,
    required: [true, 'Must have thumbnail'],
  },
  rating_numbers: {
    type: Number,
    default: 0,
  },
  product_brief_intro: {
    type: String,
    required: [true, 'Must have intro'],
  },
  description_title_1: {
    type: String,
    required: [true, 'Must have title'],
  },
  description_text_1: {
    type: String,
    required: [true, 'Must have text desc'],
  },
  description_title_2: {
    type: String,
    required: [true, 'Must have title'],
  },
  description_text_2: {
    type: String,
    required: [true, 'Must have text desc'],
  },
  description_sub_title_1: {
    type: String,
    required: [true, 'Must have subtitle'],
  },
  description_text_3: {
    type: String,
    required: [true, 'Must have text desc'],
  },
  description_image_1: {
    type: String,
    required: [true, 'Must have image'],
  },
  description_text_4: {
    type: String,
  },
  description_sub_title_2: {
    type: String,
  },
  description_text_5: {
    type: String,
  },
  description_image_2: {
    type: String,
  },
  description_text_6: {
    type: String,
  },
  monitor_size: {
    type: String,
  },
  display_technology: {
    type: String,
  },
  back_camera: {
    type: String,
  },
  front_camera: {
    type: String,
  },
  ram_size: {
    type: String,
  },
  memory_capacity: {
    type: String,
  },
  simcard_number: {
    type: String,
  },
  operating_system: {
    type: String,
  },
  aspect_ratio: {
    type: String,
  },
  chipset_cpu: {
    type: String,
  },
  battery_size: {
    type: String,
  },
});

const mobileModel = mongoose.model('mobileModel', mobileSchema);

module.exports = mobileModel;
