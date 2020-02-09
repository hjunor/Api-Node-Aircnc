const Book = require ('../models/Booking');
module.exports = {
 async store(req,res){
       const { user_id } = req.headers;
       const { spot_id } = req.params;
       const  { date }  = req.body

      const book = await Book.create({
          user: user_id,
          spot: spot_id,
          date,
      })
      await book.populate('spot').populate('user').execPopulate();
      return res.json(book);
    }

};