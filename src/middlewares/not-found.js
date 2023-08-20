module.exports = (req, res, next) => {
    res.status(404).json({ message: 'Resouce not found on this server !' });
  };
  