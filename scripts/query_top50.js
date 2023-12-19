// query.js

// Sample request to find top-50 users
// with the highest avg feedback

db.rides.aggregate([
  {
    $group: {
      _id: "$user_id",
      average_user_feedback: { $avg: "$user_feedback" }
    }
  },
  {
    $project: {
      _id: 1,
      average_user_feedback: { $round: ["$average_user_feedback", 2] }
    }
  },
  {
    $sort: { average_user_feedback: -1 }
  },
  {
    $limit: 50
  }
])
