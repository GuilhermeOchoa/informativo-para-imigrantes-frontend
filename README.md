# Estrutura do Projeto <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo do React Native" width="30" height="30">

A estrutura � organizada da seguinte forma:

- ?? `src/`
  - ?? `@types/`              - Tipos TypeScript customizados
  - ?? `assets/`              - Recursos como imagens e �cones
  - ?? `components/`          - Componentes reutiliz�veis
    - ?? `ExempleButton/`       - Exemplo de componente
      - ?? `index.tsx`  - Implementa��o do codigo do componente
      - ?? `styles.ts`  - Implementa��o da estiliza��o do componente
  - ?? `contexts/`            - Contextos para gerenciamento de estado (autentica��o)
  - ?? `dtos/`                - Estrutura dos dados que s�o trocados entre o front-end e o back-end
  - ?? `hooks/`               - Hooks personalizados
  - ?? `routes/`              - Configura��o de rotas da aplica��o
  - ?? `screens/`             - Telas do aplicativo
    - ?? `Home/`              - Exemplo de tela
      - ?? `index.tsx`
      - ?? `index.ts`
  - ?? `services/`            - Chamadas aos endpoints do back-end
  - ?? `storage/`             - Gerenciamento de armazenamento local
  - ?? `theme/`               - Padr�es de cores e estilos de fonte
  - ?? `utils/`               - Fun��es utilit�rias


# Dependencias instaladas
Certifique-se de instalar todas as depend�ncias necess�rias:

	npm install
	npm install --save-dev babel-plugin-module-resolver

## Styled Component
	npm install styled-components
	npm install --save-dev @types/styled-components @types/styled-components-react-native

## Stack Navigator
	npm install @react-navigation/native
	npm install @react-navigation/stack

### Sujest�o
	instalar a extens�o vscode-styled-components


# Iniciando a Aplica��o
	1. Abra o emulador a partir do Android Studio.

	2. No terminal da aplica��o React Native, localizado na pasta raiz, execute o comando "npm start".

	3. Se todos os passos forem conclu�dos sem erros, voc� ver� os bot�es de configura��o do emulador no terminal. Pressione a tecla "A" no pr�prio terminal para carregar a aplica��o no Android Studio.
