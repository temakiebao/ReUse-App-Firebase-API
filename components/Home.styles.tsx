import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9F8' },
  
    header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  logoHeader: {
    width: 60,
    height: 60,
    borderRadius: 5,
    resizeMode: 'contain'
  },
    searchSection: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    elevation: 2,
    
  },
  input: { fontSize: 16 },

  shop: {
    
  },

  welcome: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 20,
  },

  banner: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 200,
    padding: 20,
  },

  // Estilos das seções com "Ver tudo"
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A' },
  seeMore: { color: '#56AEFF', fontWeight: 'bold', fontSize: 14 },
  
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  gridItem: {
    width: '50%',
  },
  fabAnunciar: {
    position: 'absolute', 
    bottom: 30,           
    right: 20,         
    backgroundColor: '#2D6A4F',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,         
    zIndex: 10,           
  },
  fabText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  cardNovo: {
    width: 150,
    marginRight: 15,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10
  },
  fotoCard: {  
    width: '100%', 
    height: 100, 
    borderRadius: 8, 
    backgroundColor: '#EEE' },
  nomeCard: { 
    fontWeight: 'bold', 
    fontSize: 14, 
    marginTop: 8, 
    color: '#333' },
  dataCard: { 
    fontSize: 11, 
    color: '#2D6A4F', 
    marginTop: 2 
  },

  btnApagarCard: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', 
    borderRadius: 8,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    zIndex: 50,
  },

});