#!/bin/bash

docker-compose exec router sh -c "mongoimport --host router --port 27017 --db london --collection postcodes --type csv --file /data/london.csv --headerline --numInsertionWorkers=6"
docker-compose exec router sh -c "mongosh london < /scripts/query.js"
