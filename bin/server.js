'use strict'

const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');


/*configurando a porta*/
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
//CHAMANDO AS FUNÇÕES
server.listen(port);/*informar ao servidor para ouvir na porta*/
server.on('error', onError); //chamando a função para tratamento de erro
server.on('listening', onListening);
console.log('Rodando na porta...')

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

//função para criação do debug
function onListening(){
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe' + addr
    : 'port' + addr.port;
    debug('Listening on ' + bind);
}