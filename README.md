# Estrutura do Projeto <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo do React Native" width="30" height="30">

A estrutura � organizada da seguinte forma:

- :file_folder: `src/`
  - :file_folder: `@types/`              - Tipos TypeScript customizados
  - :file_folder: `assets/`              - Recursos como imagens e �cones
  - :file_folder: `components/`          - Componentes reutiliz�veis
      - :file_folder: `Button.tsx`  - Implementa��o do codigo do componente
      - :file_folder: `Input.tsx`  - Implementa��o do codigo do componente
  - :file_folder: `contexts/`            - Contextos para gerenciamento de estado (autentica��o)
  - :file_folder: `dtos/`                - Estrutura dos dados que s�o trocados entre o front-end e o back-end
  - :file_folder: `hooks/`               - Hooks personalizados
  - :file_folder: `routes/`              - Configura��o de rotas da aplica��o
  - :file_folder: `screens/`             - Telas do aplicativo
      - :file_folder: `Home.tsx`
  - :file_folder: `services/`            - Chamadas aos endpoints do back-end
  - :file_folder: `storage/`             - Gerenciamento de armazenamento local
  - :file_folder: `theme/`               - Padr�es de cores e estilos de fonte
  - :file_folder: `utils/`               - Fun��es utilit�rias


# Instalando dependencias
Todas as dependencias est�o dentro do arquivo install-all.sh
Executar os seguintes comandos:

# Arquivo execut�vel:
	chmod +x install-all.sh

# Executar arquivo:
	./install-all.sh


# Iniciando a Aplica��o
	1. Abra o emulador a partir do Android Studio.

	2. No terminal da aplica��o React Native, localizado na pasta raiz, execute o comando "npm start".

	3. Se todos os passos forem conclu�dos sem erros, voc� ver� os bot�es de configura��o do emulador no terminal. Pressione a tecla "A" no pr�prio terminal para carregar a aplica��o no Android Studio.
