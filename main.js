var app = require('app'); // Controla o ciclo de vida da aplicação
var BrowserWindow = require('browser-window'); // Cria a janela nativa do navegador

// console funciona
console.log('Iniciando');

// Mantém a referência para a janela global para o GC não a remover
var mainWindow = null;

// Destrói a aplicação quando todas as janelas são fechadas
app.on('window-all-closed', function() {
  app.quit();
});

// Chamado quando a inicialização do Electron terminar e for possível criar janelas
app.on('ready', function() {
  // Cria a janela principal
  mainWindow = new BrowserWindow({width:800, height: 600});

  //Carrega a página local da aplicação
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Abre a aba de DevTools
  mainWindow.openDevTools();

  // Ocorre quando a janela é fechada
  mainWindow.on('closed', function() {
    // Remove  a referência da janela para o GC a coletar
    mainWindow = null;
  })
})
