import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      justifyItems: 'center',
      color: '#F9F9F9',
      fontFamily: 'Arial',
      padding: 13,
    },
    
    texto: { 
      display: 'flex',
      color: 'black', 
      fontSize: 15,
      marginBottom: 25,
      textAlign:'justify'
    },
    titulo: {
      display: 'flex',
      color: 'black', 
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  });

  export default homeStyles;