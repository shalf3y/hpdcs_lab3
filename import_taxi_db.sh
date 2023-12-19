#!/bin/bash

docker-compose exec router sh -c "mongoimport --host router --port 27017 --db london --collection rides --type csv --file /data/rides.csv --headerline --numInsertionWorkers=6"
# docker-compose exec router sh -c "mongoimport --host router --port 27017 --db london --collection rides --type csv --file /data/rides_stripped.csv --headerline --numInsertionWorkers=6"
docker-compose exec router sh -c "mongosh london < /scripts/query_top50.js"
