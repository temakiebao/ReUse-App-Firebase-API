import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  cabecalhoPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F0F7F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  nomeUsuario: {
    fontFamily: 'Gill Sans',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    fontFamily: 'Gill Sans',
    fontSize: 14,
    color: '#888',
  },
  divisor: {
    height: 1,
    backgroundColor: '#EEE',
    marginBottom: 10,
  },
  secaoOpcoes: {
    marginTop: 10,
  },
  opcaoMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F8F8',
  },
  textoOpcao: {
    fontFamily: 'Gill Sans',
    fontSize: 16,
    marginLeft: 15,
    color: '#444',
  },
  rodapeMenu: {
    marginTop: 20,
    paddingBottom: 40,
  },
  botaoSair: {
    borderBottomWidth: 0,
  },
  botaoEntrar: {
    backgroundColor: '#F0F7F4',
    borderRadius: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 0,
    marginTop: 20,
  }
});