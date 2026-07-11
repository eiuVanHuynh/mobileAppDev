import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'flex-end',   
    paddingHorizontal: 10,
    width:'100%',
  },
  displayText: {
    fontSize: 74,              
    color: '#333',
    fontWeight: '370',
    width:'100%',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  button: {
    flex: 1,
    height: 52,
    borderRadius: 36,           
    backgroundColor: '#fff',   
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 26,
    color: '#333',
    fontWeight: '500',
  },
  zeroButton: {
    flex: 2,                   
    alignItems: 'center',   
  },
  operatorButton: {    
    flex: 1,
    height: 52,
    borderRadius: 36,
    backgroundColor: '#e8e8e8',    
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  operatorText: {
    color: '#ff9500',          
    fontSize: 32,
    fontWeight: '400',
  },
  equalButton: {
    flex: 0.6,
    height: 52,
    borderRadius: 36,
    backgroundColor: '#ff9500',  
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  equalText: {
    color: '#fff',             
    fontSize: 28,
  },
  clearButton: {
    flex: 1,
    height: 60,
    borderRadius: 30,            
    backgroundColor: '#e0e0e0',  
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  clearButtonText: {
    color: '#555',
    fontSize: 22,
    fontWeight: '500',
  }
});
