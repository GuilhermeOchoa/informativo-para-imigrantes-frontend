import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    maxHeight: '100%',
    maxWidth: '100%',

  },
  info:{
    backgroundColor: 'rgba(225, 240, 196, 0.40)',
    width: '300',
    marginTop: 10,
    marginRight: 24,
    marginLeft: 24,
    padding: 12,
    borderRadius: 7,
    borderWidth: 1,            
    borderColor: '#D4D4D4',  
    borderStyle: 'solid', 
    justifyContent:'center'
  },
  header:{
    padding: 12,
    justifyContent:'center',
  },
  scroll: {
    flex: 1,
  },
  titleWrapper:{
    padding: 12,
    justifyContent:'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  infoContent: {
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    color: 'red',
  },
});

export default styles;