var db = require('../db/config');

function getAllFeedBacks(req, res){
  db.FeedBack.find({}, function (err, feeds) {
    if(err) throw new err;

    res.json({
      success: true,
      feeds: feeds
    })
  })
}

function deleteTargetFeed(req, res){
  db.FeedBack.findByIdAndRemove(req.params.id, function(err, feeds){
    if(err){
      res.sendStatus(500);
      return;
    }

    res.json({
      success: true
    });
  });
}

module.exports = {
  getAllFeedBacks: getAllFeedBacks,
  deleteTargetFeed: deleteTargetFeed
};