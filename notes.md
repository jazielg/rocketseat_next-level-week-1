# Video 1 -

```bash
# iniciar projeto da api
mkdir server
npm init -y

# instalar express
npm install express
npm install @types/express -D

# instalar dependencias typescript
npm install typescript -D
npm install ts-node -D
npx tsc --init

# executar aquivo typescript
npx ts-node src/server.ts

npm install ts-node-dev -D
npx ts-node-dev src/server.ts

npm run dev
```

```bash
npx create-react-app web --template typescript
```

# Video 2

```bash
npm install knex
npm install sqlite3

npx knex migrate:latest --knexfile knexfile.ts migrate:latest

npm run knex:migrate

# Executar seed
npm run knex:seed

npm install cors
npm install @types/cors -D
```

#### Images gratuitas

https://unsplash.com

# Video 3

```bash
# Iniciar aplicação Web
npm start

# Inserir icones
npm install react-icons

# Rotas
npm install react-router-dom
npm install @types/react-router-dom -D
```

```bash
#Utilizar mapa de código aberto
## https://leafletjs.com
## https://react-leaflet.js.org

npm install leaflet@1.6.0 react-leaflet@2.7.0
npm install -D @types/leaflet
```

```bash
# Buscar na api
npm install axios
```

# Video 4

```bash
# Instalar expo cli
npm install -g expo-cli

# Criar projeto mobile
expo init mobile
 > blank (TypeScript)
```

```bash
# Instalar fontes - Expo Google Fonts (https://github.com/expo/google-fonts)
expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

## Se tiver algum erro ao carregar fontes, executar: `rm -rf node_modules/ && rm -f package-lock.json && rm -f yarn.lock && npm cache verify && npm install && expo r -c`

```

```bash
# Navegação
## https://reactnavigation.org
npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

## https://reactnavigation.org/docs/stack-navigator/
npm install @react-navigation/stack
```

```bash
# Utilizar mapas
expo install react-native-maps

# Entender imagens em SVG
expo install react-native-svg

# Requisições com api
npm install axios

# Identificar a localização do usuário
expo install expo-location

# Email
expo install expo-mail-composer

# Select Input - https://github.com/lawnstarter/react-native-picker-select
npm i react-native-picker-select
```
