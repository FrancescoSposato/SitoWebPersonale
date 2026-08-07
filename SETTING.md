# SETTING.md

Passi eseguiti per configurare questo progetto Expo con Expo Router.

## 1. Installazione dipendenze base di Expo Router

```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

Pacchetti minimi richiesti da Expo Router per funzionare.

## 2. Entry point in `package.json`

Modificata la riga `main`:

```json
"main": "expo-router/entry"
```

Dice a Expo di usare il router come punto di ingresso invece del vecchio `App.js`.

## 3. Configurazione `app.json`

Aggiunta la sezione `web` e lo `scheme`:

```json
"web": {
  "bundler": "metro",
  "output": "static"
},
"scheme": "francescosposato"
```

Lo `scheme` è richiesto da Expo Router per il deep linking.

## 4. Creazione cartella `app/`

Creata la cartella `app/` nella root del progetto (stesso livello di `package.json`), con:

- `app/_layout.js` — layout radice:

  ```jsx
  import { Stack } from "expo-router";

  export default function RootLayout() {
    return <Stack />;
  }
  ```

- `app/index.js` — home page:

  ```jsx
  import { StatusBar } from "expo-status-bar";
  import { StyleSheet, Text, View } from "react-native";

  export default function Index() {
    return (
      <View style={styles.container}>
        <Text>Home page</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  ```

## 5. Rimozione vecchio `App.js`

Eliminato `App.js` dalla root: con `expo-router/entry` come entry point non serve più, la root dell'app la gestisce `app/_layout.js`.

## 6. Dipendenze per il supporto web

Durante il primo `expo start --web` è emerso che mancavano i pacchetti necessari al bundling web (non inclusi nel set minimo del punto 1):

```
npx expo install react-native-web react-dom @expo/metro-runtime
```

## 7. Test

```
npx expo start --web -c
```

Il flag `-c` pulisce la cache di Metro (utile dopo un bundling fallito per dipendenze mancanti). Verificato che la home in `app/index.js` venga mostrata senza errori in console.
