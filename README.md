##Install

- git clone
- npm install sequelize -g
- setup postgres, `sequelize db:migrate`

#Deploy

- push to master
- will deploy automatically after tests pass on circleci
- if there's migrations, run: `heroku run sequelize db:migrate` after deploy
