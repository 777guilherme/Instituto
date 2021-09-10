import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native';

import logo from './src/resources/img/arvore.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerDescricao}>
        <View style={styles.containerTexto}>
          <View style={styles.separador} />
          <Image source style={styles.logo}></Image>
          <View style={styles.separador} />
        </View>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.texto}>
          Bem Vindo ao
        </Text>
        <Text style={styles.texto1}>
          Instituto Bira Padilha
        </Text>
      </View>
      < View style={styles.inputs}>
        <TextInput
          style={styles.inputCPF}
          placeholder="digite seu CPF"
        />
        <TextInput
          style={styles.inputCPF}
          placeholder="digite sua senha"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DD0836",
    marginTop: 45
  },
  containerDescricao: {
    paddingVertical: 10
  },
  separador: {
    width: 150,
    borderWidth: 1.5,
    borderColor: "#fff",
    marginTop: 70,
    marginBottom: 65
  },
  logo: {
    width: 60,
    height: 60,
    marginTop: 40
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  texto: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'white',
  },
  texto1: {
    fontSize: 33,
    color: 'white',
    marginTop: 7,
  },
  welcome: {
    marginLeft: 15,
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCPF: {
    width: 350,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 150,
    color: 'white',
    padding: '10'

  },
});
