// init-router.js
sh.addShard("shard01/shard01a:27018")
sh.addShard("shard01/shard01b:27018")
sh.addShard("shard01/shard01c:27018")

sh.addShard("shard02/shard02a:27019")
sh.addShard("shard02/shard02b:27019")
sh.addShard("shard02/shard02c:27019")

sh.addShard("shard03/shard03a:27020")
sh.addShard("shard03/shard03b:27020")
sh.addShard("shard03/shard03c:27020")

sh.addShard("shard04/shard04a:27021")
sh.addShard("shard04/shard04b:27021")
sh.addShard("shard04/shard04c:27021")

// Add admin user
db = db.getSiblingDB('admin');
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: ["root"]
});
