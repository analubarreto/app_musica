Esse projeto foi feito com [Create React App](https://github.com/facebook/create-react-app).

## Instruções

Inicialmente para ter o projeto disponível em sua máquia é necessário ter instalados:
    * Git (https://git-scm.com/)
    * NodeJS (https://nodejs.org/en/)
    * create-react-app (https://github.com/facebook/create-react-app)

### Downloads e instalações (Windows)
1. Utilize os links a cima para fazer os devidos downloads do Git e do NodeJS e siga os instaladores até o fim
2. Abra o terminal do windows utilizando o menu iniciar e digitando cmd
3. Depois de aberto o terminal digite npm install create-react-app --global e espere a instalação terminar
4. Ao terminar a instalação do create-react-app, faça o download dos arquivos através do botão de clone/download, baixando como zip.
    * O download também pode ser feito com ouso da cmd através do comando "git pull https://github.com/analubarreto/app_musica.git"
    * ANTES tenha certeza de que está no diretório em que deseja que a pasta seja colocada

### Downloads e instalações (Linux - Distribuições baseadas no Debian)
1. Instale o git e o nodejs abrindo abrindo o terminal (ctrl+alt+T) e digitando:
    * curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
        - A versão que eu utilizei para o projeto foi a versão 10, mas pode ser testado também nas versões 11 e 12, trocando a linha "setup_10.x" por "setup_11.x" ou "setup_12.x"
    * sudo apt-get install -y nodejs
    * sudo apt install git
2. Ainda no terminal instale o create-react-app com o comando (sem as aspas): "npm install create-react-app"
3. Ao terminar a instalação do create-react-app, faça o download dos arquivos através do botão de clone/download, baixando como zip.
    * O download também pode ser feito com ouso da cmd através do comando "git pull https://github.com/analubarreto/app_musica.git"
    * ANTES tenha certeza de que está no diretório em que deseja que a pasta seja colocada

### Downloads e instalações (Linux - Distribuições baseadas no Arch)
1. Instale o git e o nodejs abrindo abrindo o terminal (ctrl+alt+T) e digitando:
    * sudo pacman -Syu git
    * sudo pacman -Syu nodejs npm
2. Ainda no terminal instale o create-react-app com o comando (sem as aspas): "npm install create-react-app"
3. Ao terminar a instalação do create-react-app, faça o download dos arquivos através do botão de clone/download, baixando como zip.
    * O download também pode ser feito com ouso da cmd através do comando "git pull https://github.com/analubarreto/app_musica.git"
    * ANTES tenha certeza de que está no diretório em que deseja que a pasta seja colocada

### Scripts necessários

Os scripts que vem junto com o create react app são:

### `npm start`

Abre o app no modo desenvolvedor.<br>
Para abrir o aplicativo no browser entre, através do cmd (Windows) ou Terminal(Linux) na pasta root nos quais estão presentes os arquivos e digite "npm start", o aplicativo irá iniciar e, normalmente, abrirá uma página no seu browser principal com o endereço http://localhost:3000, caso não abra. Entre no seu browser e digite o endereço. <br>

### `npm test`

