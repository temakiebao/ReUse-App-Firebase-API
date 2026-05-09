import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  containerBloqueado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#FFF',
  },
  tituloBloqueado: {
    fontFamily: 'Gill Sans',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtituloBloqueado: {
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#666',
    marginVertical: 15,
  },
  botaoLogin: {
    backgroundColor: '#2D6A4F',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoLogin: {
    fontFamily: 'Gill Sans',
    color: '#FFF',
    fontWeight: 'bold',
  },
  titulo: {
    fontFamily: 'Gill Sans',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botaoFoto: {
    height: 150,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  textoBotaoFoto: {
    fontFamily: 'Gill Sans',
    color: '#888',
    marginTop: 10,
  },
  formulario: {
    width: '100%',
  },
  label: {
    fontFamily: 'Gill Sans',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    fontFamily: 'Gill Sans',
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  inputArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  botaoPublicar: {
    backgroundColor: '#2D6A4F',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotaoPublicar: {
    fontFamily: 'Gill Sans',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});