//init-shard02.js

rs.initiate(
   {
      _id: "shard02",
      version: 1,
      members: [
         { _id: 0, host : "shard02a:27019" },
         { _id: 1, host : "shard02b:27019" },
         { _id: 2, host : "shard02c:27019" },
      ]
   }
)
