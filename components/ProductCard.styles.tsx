import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 8,
    padding: 12,
    borderRadius: 15,
    elevation: 2,
    },
  img: { 
    width: '100%', 
    height: 90, 
    resizeMode: 'contain',
    },
  title: { 
    fontWeight: 'bold', 
    fontSize: 14, 
    marginTop: 8 
    },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 4
    },
  status: { 
    color: '#56AEFF', 
    fontSize: 10, 
    fontWeight: 'bold' 
    },
  rating: { 
    fontSize: 11, 
    color: '#666' 
    },
  desc: { 
    fontSize: 10, 
    color: '#888', 
    marginVertical: 6 
    },
  price: { 
    fontWeight: 'bold', 
    color: '#56AEFF', 
    fontSize: 15 
    },
  btn: { 
    backgroundColor: '#56AEFF', 
    borderRadius: 6, 
    paddingHorizontal: 10, 
    paddingVertical: 4 
    },
  btnText: { 
    color: '#FFF', 
    fontWeight: 'bold' 
    }
});