# React Navigation 

React navigation allows you to switch between components by instancing the files in a react navigation router.

## Create and add the first route 

1. First, you need to import **NavigationContainer** and **createNativeStackNavigator**. You may need to do and ``npm install`` for these dependencies.

```js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
```

2. Create the main App function which will return the **NavigationContainer** component.

```js
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
```

3. Import your custom components

```js
import HomeScreen from "./components/Main";
import StartScreen from "./components/StartScreen";
```

4. Create the functions which will return your components.

```js
function FirstComponentScreen({ navigation }) {
  return (
    <StartScreen navigation={navigation} />
  );
}

function SecondComponentScreen({ navigation }) {
  return (
    <HomeScreen navigation={navigation} />
  );
}
```

5. Add the components as **Stack.Screen**

```js
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
      <Stack.Screen name="First" component={FirstComponentScreen} />
        <Stack.Screen name="Second" component={SecondComponentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Add a route with props

Sometimes, you need to pass a prop from a component to another.

### Add the function which will be used inside the **NavigationContainer**

```js
// App.js
const ComponentWithProp = ({ navigation, route }) => {
  return <MyComponent navigation={navigation} id={route.params.myPropName}/>
};
```

### Call the screen from another component

```js
navigation.navigate('MyComponent', {myPropName: myVariable})
```

### Use the prop inside the Component

```js
const Battle = ({ navigation, myPropName }) => {
    console.log(myPropName)
}
```
