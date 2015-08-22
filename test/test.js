var exec = require('child_process').execSync
if(process.env.NODE_ENV == 'test') exec("sequelize db:migrate --url 'postgres://ubuntu@localhost:5432/circle_test'")
