'use strict'

/*importar os pacotes*/

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');


/*configurando a porta*/
const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


/*criando o servidor*/

const server = http.createServer(app);
const router = express.Router();


/*configurando rota*/

var route = router.get('/', (req, res, next )=>{
  res.status(200).send({
    title: "Node Store API",
    version: "0.0.1"
  });
});

app.use('/', route);

/*informar ao servidor para ouvir na porta*/

server.listen(port);
console.log('API rodando na porta ' + port);


/*função para disponibilizar porta* - normalized port*/

function normalizePort(val){
  const port = parseInt(val, 10);

  if(isNaN(port)){
    return val;
  }
  if(port >= 0){
    return port;
  }

  return false;
}

/*Tratamento de erro*/

function onError(error){
  if(error.syscall !=='listen'){
    throw error;
  }

  const bind = typeof port === 'string' ?
    'Pipe' + port :
    'Port' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + 'requires elevated privileges');
      process.exit(1);      
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;

    default:
      throw error;
  }
}