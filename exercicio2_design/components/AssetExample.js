import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function AssetExample() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    let produtos = [
      { id: 1, name: 'Abajur', imagem: require('../assets/01-tablelamps.png') },
      {
        id: 2,
        name: 'Lâmpada de teto',
        imagem: require('../assets/02-ceilinglamps.png'),
      },
      { id: 3, name: 'Arandela', imagem: require('../assets/03-sconces.png') },
      {
        id: 4,
        name: 'Luminária de chão',
        imagem: require('../assets/04-floorlamps.png'),
      },
      { id: 5, name: 'Abajur', imagem: require('../assets/05-lightdecor.png') },
      { id: 6, name: 'Abajur', imagem: require('../assets/06-garlands.png') },
    ];
    setProdutos(produtos);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Lista de Produtos</Text>
      <View style={styles.containerSacola}>
        <Text style={styles.lighteria}>Lighteria</Text>
        <View style={styles.sacola}>
          <Image
            style={styles.logo}
            source={require('../assets/icone-sacola.png')}
          />
        </View>
      </View>
      <View style={styles.containerCategorias}>
        <View style={styles.line} />
        <Text style={styles.categorias}>Categorias</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.containerProduto}>
        {produtos.map((produto) => (
          <View key={produto.id} style={styles.cardContainer}>
            <Card style={styles.card}>
              <Image source={produto.imagem} style={styles.imagem} />
              <Text style={styles.nomeProduto}>{produto.name}</Text>
            </Card>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#d3d3d3',
    height: '100%',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerSacola: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  lighteria: {
    marginBottom: 'auto',
    marginTop: 'auto',  
    fontWeight: 'bold',
    fontSize: 24,
  },
  sacola: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white'
  }, 
  logo: {
    width: 40,
    height: 40,   
  },
  containerCategorias: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:15
  },
  categorias: {
    margin: 'auto',
    paddingHorizontal: 5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginLeft: 10,
    marginRight: 10,
  },
  containerProduto: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 30,
  },
  cardContainer: {
    flexBasis: '48%',
    marginBottom: 10,
    height: 125,
  },
  card: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    margin: 3,
    borderWidth: 2,
  },
  imagem: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  nomeProduto: {
    marginTop: 10,
    textAlign: 'center',
  },
});

/*

<View>
        {produtos.map((produto) => {
          return (
            <Text>
              {produto.id} - {produto.name}
            </Text>
          )
        })}
      </View>


export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let users = [
      { id: 1, name: 'infinitbility' },
      { id: 2, name: 'notebility' },
      { id: 2, name: 'repairbility' },
    ];
    setUsers(users);
  }, []);

  return (
    <View style={styles.container}>
     
        {users.map((user) => {
          return (
            <Text style={styles.paragraph}>{user.id} - {user.name}</Text>
          )
        })}
     
    </View>
  );
}

const Home = () => {
  const array = [
    {
      key: '1',
      title: 'example title 1',
      subtitle: 'example subtitle 1',
    },
    {
      key: '2',
      title: 'example title 2',
      subtitle: 'example subtitle 2',
    },
    {
      key: '3',
      title: 'example title 3',
      subtitle: 'example subtitle 3',
    },
  ];

  const list = () => {
    return array.map(element => {
      return (
        <View key={element.key} style={{margin: 10}}>
          <Text>{element.title}</Text>
          <Text>{element.subtitle}</Text>
        </View>
      );
    });
  };

  return <View>{list()}</View>;


*/
