# Estrutura do Projeto <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo do React Native" width="30" height="30">

A estrutura é organizada da seguinte forma:

- ?? `src/`
  - ?? `@types/`              - Tipos TypeScript customizados
  - ?? `assets/`              - Recursos como imagens e ícones
  - ?? `components/`          - Componentes reutilizáveis
    - ?? `ExempleButton/`       - Exemplo de componente
      - ?? `index.tsx`  - Implementação do codigo do componente
      - ?? `styles.ts`  - Implementação da estilização do componente
  - ?? `contexts/`            - Contextos para gerenciamento de estado (autenticação)
  - ?? `dtos/`                - Estrutura dos dados que são trocados entre o front-end e o back-end
  - ?? `hooks/`               - Hooks personalizados
  - ?? `routes/`              - Configuração de rotas da aplicação
  - ?? `screens/`             - Telas do aplicativo
    - ?? `Home/`              - Exemplo de tela
      - ?? `index.tsx`
      - ?? `index.ts`
  - ?? `services/`            - Chamadas aos endpoints do back-end
  - ?? `storage/`             - Gerenciamento de armazenamento local
  - ?? `theme/`               - Padrões de cores e estilos de fonte
  - ?? `utils/`               - Funções utilitárias


# Dependencias instaladas
Certifique-se de instalar todas as dependências necessárias:

	npm install
	npm install --save-dev babel-plugin-module-resolver

## Styled Component
	npm install styled-components
	npm install --save-dev @types/styled-components @types/styled-components-react-native

## Stack Navigator
	npm install @react-navigation/native
	npm install @react-navigation/stack

### Sujestão
	instalar a extensão vscode-styled-components


# Iniciando a Aplicação
	1. Abra o emulador a partir do Android Studio.

	2. No terminal da aplicação React Native, localizado na pasta raiz, execute o comando "npm start".

	3. Se todos os passos forem concluídos sem erros, você verá os botões de configuração do emulador no terminal. Pressione a tecla "A" no próprio terminal para carregar a aplicação no Android Studio.
