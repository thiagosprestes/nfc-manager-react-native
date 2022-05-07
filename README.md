<h1 align="center">
<br>
<b>
NFC manager
</b>
</h1>

<p align="center">
  App feito para ler o conteúdo de tags NFC e gravar conteúdos nela :D
</p>

# 📋 Índice

- [Telas](#-Telas)
- [Sobre o projeto](#-Sobre-o-projeto)
  - [Funcionalidades](#-Funcionalidades)
- [Tecnologias utilizadas](#-Tecnologias-utilizadas)
- [Rodando o projeto](#-Rodando-o-projeto)
  - [Pré-requisitos](#-Pré-requisitos)

## 🎨 Telas

<div>
<img src=".github/home.png" alt="nfc-manager" width="180">
<img src=".github/read.png" alt="nfc-manager" width="180">
<img src=".github/options.png" alt="nfc-manager" width="180">
<img src=".github/content.png" alt="nfc-manager" width="180">
<img src=".github/success.png" alt="nfc-manager" width="180">
</div>

## 📃 Sobre o projeto

O propósito do app é possibilitar a leitura e gravação de tags NFC, a ideia surgiu a partir do momento em que comecei a estudar sobre como utilizar módulos nativos no React Native.

### 🔎 Funcionalidades

- Ler o conteúdo de tags NFC
- Gravar texto, links e localização em uma tag NFC

## 🛠 Tecnologias utilizadas

- ⚛ **React native** - Aplicativo
- ☕ **Java** - Módulo de manipulação das tags
- 🛳️ **React navigation** - Navegação
- 🎇 **Lottie** - Animações
- 💅 **Styled components** - Estilização
- 😊 **React native vector icons** - Icones
- 📨 **React native share** - Compartilhar dados da tag lida

## 🚀 Rodando o projeto

### Pré-requisitos

- Git
- Yarn
- Conhecimento prévio de como rodar projetos com React Native

### 📲 Rodando o app

Com a máquina devidamente configurada para rodar projetos com React Native, clone o repositório

```bash

# Clona o repositório
git clone https://github.com/thiagosprestes/nfc-tag-manager-react-native.git

```

Navegue até a pasta do projeto clonado e execute os comandos abaixo

```bash

# Entra na pasta do app
cd nfc-tag-manager-react-native

# Instala as dependências
yarn

```

Após concluir a instalação das dependências, ainda no terminal da pasta do app com o emulador aberto ou device físico conectado via adb execute o comando abaixo

```bash

# Instala a aplicação no device
yarn android

```

Após concluir a instalação do App, execute o seguinte comando para executar o app

```bash

# Inicia a aplicação
yarn start

```
