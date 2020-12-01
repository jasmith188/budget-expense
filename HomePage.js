import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  Button,
  View,
  SafeAreaView,
} from 'react-native';
import Todo from './Todo';
import LoginPage from './LoginPage';
import { BarChart, LineChart } from 'react-native-chart-kit';
import moment from 'moment';

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
  titleText: {
    // backgroundColor: 'red',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const HomePage = ({navigation}) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([
    { date: moment().format('LL'), amount: 0 },
    { date: moment().subtract(1, 'days').format('LL'), amount: 50 },
    { date: moment().subtract(1, 'days').format('LL'), amount: 100 },
    { date: moment().subtract(1, 'days').format('LL'), amount: 250 },
    { date: moment().subtract(1, 'days').format('LL'), amount: 350 },
    { date: moment().subtract(7, 'days').format('LL'), amount: 500 },
    { date: moment().subtract(6, 'days').format('LL'), amount: 700 },
    { date: moment().subtract(5, 'days').format('LL'), amount: 800 },
    { date: moment().subtract(4, 'days').format('LL'), amount: 900 },
    { date: moment().subtract(3, 'days').format('LL'), amount: 1250 },
    { date: moment().subtract(2, 'days').format('LL'), amount: 1500 },
    { date: moment().subtract(2, 'days').format('LL'), amount: 2500 },
  ]);
  const [transformedData, setTransformedData] = useState([]);

  useEffect(() => {
    setTransformedData(transformData(groupBy(data, 'date')));
  }, [data]);

  const groupBy = (array, key) =>
    array.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});

  const [gigs, setGigs] = useState([
    {
      description: 'Gorcery Store',
      amount: 49.62,
      timestamp: new Date(),
    },
  ]);

  const getDates = () => transformedData.map((pair) => pair.date);
  const getAmounts = () => transformedData.map((pair) => pair.amount);
  const transformData = (groupedData) => {
    const transformedArray = [];

    Object.entries(groupedData).forEach((entry) => {
      const total = entry[1].reduce((total, pair) => total + pair.amount, 0);
      transformedArray.push({
        date: moment(entry[0]).format('MM/DD'),
        amount: total,
      });
    });

    const sortedArray = transformedArray.sort((a, b) =>
      moment(a['date']).diff(moment(b['date']))
    );

    return sortedArray;
  };

  console.log('DEBUG 🔥', data);
  console.log('The Dates ⏲️', getDates());
  console.log('The Amounts ⏲️', getAmounts());
  console.log(
    'The GROUPED values are ⏲️',
    Object.entries(groupBy(data, 'date'))
  );
  console.log(
    'The Total grouped value 👽',
    transformData(groupBy(data, 'date'))
  );

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0));
  }, [gigs]);

  const addGig = () => {
    setGigs([
      ...gigs,
      {
        description: description,
        amount: amount,
      },
    ]);

    setData([
      ...data,
      {
        date: moment().format('LL'),
        amount: Number(amount),
      },
    ]);

    setDescription('');
    setAmount('');
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>Budget Expense</Text>
      </View>
      <Button title='Login' onPress={() => navigation.navigate('Login')} />

      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: getDates(),
            datasets: [
              {
                data: getAmounts(),
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: 'blue',
            backgroundGradientTo: 'red',
            decimalPlaces: null, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <Text>Total Spent: ${total} </Text>
      <TextInput
        style={styles.input}
        value={description}
        placeholder="Enter a description"
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        value={amount}
        placeholder="Enter the amount you spent in USD ($)"
        keyboardType="numeric"
        onChangeText={(text) => setAmount(text)}
      />
      <Button
        disabled={!amount && !description}
        onPress={addGig}
        title="Add Item 🚀"
      />

      {gigs.map((gig) => (
        <View>
          <Text>{gig.description}</Text>
          <Text>${gig.amount}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default HomePage;

// const HomePage = ({ navigation }) => {
//   const [input, setInput] = useState('');
//   const [todos, setTodos] = useState([]);

//   const addTodo = () => {
//     setTodos([input, ...todos]);
//     setInput('');
//   };

//   const image = {
//     uri:
//       'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-notebook-paper-background-design-template-d7dfa26f8c8c759652e2521f0ecd24eb_screen.jpg?ts=1567891546',
//   };
//   return (

//       <SafeAreaView>
//         {/* <ImageBackground source={image} style={styles.image}> */}
//         <View>
//           <Text style={styles.titleText}>Gr🍊cery List</Text>
//         </View>
//         <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Login')}
//       />
//         <TextInput
//           style={styles.todoInput}
//           value={input}
//           onChangeText={(text) => setInput(text)}
//         />
//         <Button
//           style={styles.appButtonText}
//           color="red"
//           title="Add To List"
//           onPress={addTodo}
//         />
//         <View>
//           {todos.map((todo) => (
//             <Todo style={styles.todoText} title={todo} />
//           ))}
//         </View>
//         {/* </ImageBackground> */}
//       </SafeAreaView>

//   );
// };

// export default HomePage;
