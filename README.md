## Integrantes  
- Gustavo Galvão – RM: 565969  
- Lucas Tamura – RM: 563249  

## Objetivo da Sprint
Nesta Sprint, nosso time criou a base do aplicativo mobile ReUse. O foco principal foi estabelecer uma organização de interface, usando os componentes do React Native. Com o foco em facilitar o acesso a componentes de hardware de forma sustentável e econômica.

## Desafio
O objetivo é enriquecer o nosso app em React Native para utilizar/consumir APIs externas. Além disso, vamos utilizar os recursos de autenticação, sessões e caching local. 

## YOUTUBE LINK

https://youtu.be/5o2pV-llv58

## Ferramentas utilizadas  
React Native, Expo, TypeScript, AsyncStorage, Google Firebase

## INSTRUÇÕES PARA AQUELES QUE QUEREM RODAR O PROJETO PURO
Siga estas instruções simples para configurar o ambiente e testar o aplicativo:

Clone o repositório no terminal:

git clone [[https://github.com/seu-usuario/ReUse-App-Firebase-API](https://github.com/seu-usuario/ReUse-App-Firebase-API)]

Instale as dependências no terminal do VS Code: 

"npm install"

Instalar o firebase no projeto

"npm install firebase"

Iniciar o projeto para emular no Android

"npx expo start"

pressione "a" para rodar como android, você terá 3 opções:

1 - Use o aplicativo Expo Go no seu celular escaneando o QR Code;

2 - Android Studio aberto no ambiente do PC, ele vai automaticamente abrir o app Expo Go;

3 - Copiar o IP :"exp://..." e colar no Expo Go App;

Quando finalizar o uso do app, usar o comando "CTRL + C" no terminal do VS Code para finalizar o server.

## Estrutura do projeto
app/(tabs)/: Onde fica a navegação e as telas principais.

_layout.tsx: Configura as abas inferiores e ícones.

index.tsx: Tela inicial (Home) com a busca e produtos.

menu.tsx: Tela de perfil e configurações.

cadastro.tsx: Cadastro dos anúncios

login.tsx: Login de usuário

assets/: Imagens, logos e ícones do aplicativo.

components/: Peças reutilizáveis e estilos separados.

Home.styles.tsx / Menu.styles.tsx: Arquivos de design.

ProductCard.tsx: O visual dos cards de hardware.

Products.tsx: Onde estão os dados (IDs) dos produtos.

constants/: Configurações fixas como o theme.ts (cores).

hooks/: Lógicas auxiliares para o funcionamento do app.

Arquivos de Configuração:

app.json: Nome, ícone e tela de abertura.

package.json: Lista de bibliotecas instaladas.

tsconfig.json: Regras do TypeScript.

NOVOS

context/

Autenticacao.tsx : Parte lógica da Autenticação do usuário

firabeConfig.ts: API do Firebase


