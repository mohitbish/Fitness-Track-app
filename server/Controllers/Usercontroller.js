module.exports.register = async (req, res, next) => {
    try {
      
      console.log(req.body)
    } catch (ex) {
      next(ex);
    }
  };