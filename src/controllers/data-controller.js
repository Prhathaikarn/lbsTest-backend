const { Data } = require('../models');

exports.createData = async (req, res, next) => {
  try {
    const value = req.body;
    const data = await Data.create(value);
    res.status(201).json([{ id: data.id, text: data.text }]);
  } catch (err) {
    next(err);
  }
};

exports.getAllData = async (req, res, next) => {
  try {
    const data = await Data.findAll();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.updateData = async (req, res, next) => {
  try {
    const { text } = req.body;
    const { id } = req.params;
    const result = await Data.update({ text }, { where: { id } });
    res.status(202).json({ text });
  } catch (error) {
    next(error);
  }
};
