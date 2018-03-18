let folder = "server";
let ext = "ts";

if (process.env.IS_HEROKU) {
    folder = "dist-server";
    ext = "js";
}

module.exports = {
   "type": "postgres",
   "host": "ec2-54-235-240-126.compute-1.amazonaws.com",
   "port": 5432,
   "username": "ckygraqkrjbknl",
   "password": "57d695b78b10e21c28dc66e32a12ae400776956f67abeb1e7f96637545448f1c",
   "database": "d4mh964neod3gh",
   "synchronize": true,
   "logging": false,
   "extra": {
       "ssl": true
   },
   "entities": [
      `${folder}/entity/**/*.${ext}`
   ],
   "migrations": [
      `${folder}/migration/**/*.${ext}`
   ],
   "subscribers": [
      `${folder}/subscriber/**/*.${ext}`
   ],
   "cli": {
      "entitiesDir": `${folder}/entity`,
      "migrationsDir": `${folder}/migration`,
      "subscribersDir": `${folder}/subscriber`
   }
}