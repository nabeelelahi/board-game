// express and routing set up

const {
  App
} = require('./app/config/express')

const {
  scores
} = require('./app/source')

const main = App()


function execute() {

  main.use(scores)

}

execute()