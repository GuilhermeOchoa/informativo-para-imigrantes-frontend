# Estrutura do Projeto <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo do React Native" width="30" height="30">

A estrutura é organizada da seguinte forma:

- :file_folder: `src/`
  - :file_folder: `@types/`              - Tipos TypeScript customizados
  - :file_folder: `assets/`              - Recursos como imagens e ícones
  - :file_folder: `components/`          - Componentes reutilizáveis
      - :file_folder: `Button.tsx`  - Implementação do codigo do componente
      - :file_folder: `Input.tsx`  - Implementação do codigo do componente
  - :file_folder: `contexts/`            - Contextos para gerenciamento de estado (autenticação)
  - :file_folder: `dtos/`                - Estrutura dos dados que são trocados entre o front-end e o back-end
  - :file_folder: `hooks/`               - Hooks personalizados
  - :file_folder: `routes/`              - Configuração de rotas da aplicação
  - :file_folder: `screens/`             - Telas do aplicativo
      - :file_folder: `Home.tsx`
  - :file_folder: `services/`            - Chamadas aos endpoints do back-end
  - :file_folder: `storage/`             - Gerenciamento de armazenamento local
  - :file_folder: `theme/`               - Padrões de cores e estilos de fonte
  - :file_folder: `utils/`               - Funções utilitárias

# Dependencias instaladas
Certifique-se de instalar todas as dependências necessárias:

	npm install

## Babel
	npm install --save-dev babel-plugin-module-resolver

## Fontes
	npx expo install expo-font @expo-google-fonts/roboto

## Native Base
	npm install native-base
	expo install react-native-svg@12.1.1
	expo install react-native-safe-area-context@3.3.2

## Stack Navigator
	npm install @react-navigation/native
	npx expo install react-native-screens react-native-safe-area-context
	npm install @react-navigation/native-stack

## Navegacao por botomTabs
	npm install @react-navigation/bottom-tabs


# Iniciando a Aplicação
	1. Abra o emulador a partir do Android Studio.

	2. No terminal da aplicação React Native, localizado na pasta raiz, execute o comando "npm start".

	3. Se todos os passos forem concluídos sem erros, você verá os botões de configuração do emulador no terminal. Pressione a tecla "A" no próprio terminal para carregar a aplicação no Android Studio.
