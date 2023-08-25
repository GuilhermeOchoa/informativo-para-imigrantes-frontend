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


# Instalando dependencias
Todas as dependencias estão dentro do arquivo install-all.sh
Executar os seguintes comandos:

# Tornar o arquivo executável:
	chmod +x install-all.sh

# Executar arquivo:
	./install-all.sh


# Iniciando a Aplicação
	1. Abra o emulador a partir do Android Studio.

	2. No terminal da aplicação React Native, localizado na pasta raiz, execute o comando "npm start".

	3. Se todos os passos forem concluídos sem erros, você verá os botões de configuração do emulador no terminal. Pressione a tecla "A" no próprio terminal para carregar a aplicação no Android Studio.
