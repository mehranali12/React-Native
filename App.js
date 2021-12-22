import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Image, StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomDrawer from './src/components/CustomDrawer';
import { COLORS } from './src/constants';
import addPost from './src/screens/addPost';
import chat from './src/screens/chat';
import home from './src/screens/home';
import joinUs from './src/screens/joinUs';
import list from './src/screens/list';
import login from './src/screens/login';
import productDetail from './src/screens/productDetail';
import profile from './src/screens/profile';
import searchCategory from './src/screens/searchCategory';
import signup from './src/screens/signup';
import chatting from './src/screens/chatting'
import RNBootSplash from "react-native-bootsplash"; // https://github.com/zoontek/react-native-bootsplash
import filter from './src/screens/filter';
import SearchCustomDrawer from './src/components/searchCustomDearwe'

const Drawer = createDrawerNavigator();
const CatDrawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SearchStack = createStackNavigator();
const userListStack = createStackNavigator()
const chatStack = createStackNavigator()



const catDrawerFtn = () => (

  <CatDrawer.Navigator
    drawerContent={props => <SearchCustomDrawer {...props} />}
    drawerStyle={styles.drawerStyle}
    drawerPosition='right'
  >
    <CatDrawer.Screen
      name="searchCategorysrc"
      component={searchCategory}
    />

    <CatDrawer.Screen
      name="Cars"
      component={filter}
    />

  </CatDrawer.Navigator>

)
const DrawerFtn = () => (

  <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
    drawerStyle={styles.drawerStyle}
    drawerPosition='right'
  >
    <Drawer.Screen
      name="Drawerhome"
      component={tab}
    />

    <Drawer.Screen
      name="searchCategory"
      component={catDrawerFtn}
    />
  </Drawer.Navigator>

)
const chatftn = () => (
  <chatStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <chatStack.Screen
      name='chatmain'
      component={chat}
    />
    <chatStack.Screen
      name='chatting'
      component={chatting}
    />
  </chatStack.Navigator>
)

const searchTab = () => (
  <SearchStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <SearchStack.Screen
      name='Home'
      component={home}
    />
    <SearchStack.Screen
      name='productDetail'
      component={productDetail}
    />

  </SearchStack.Navigator>

)

const userList = () => (
  <userListStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <userListStack.Screen
      name='listitem'
      component={list}
    />
    <userListStack.Screen
      name='ProductDetail'
      component={productDetail}
    />
  </userListStack.Navigator>
)

const tab = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: "#000",
      inactiveTintColor: '#8DD061',
    }}
  >
    <Tab.Screen
      name="home"
      component={searchTab}
      options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 18, height: 18, tintColor: color }}
            source={require('./src/assets/icons/search1.png')}
          />

        )
      }}
    />
    <Tab.Screen
      name="list"
      component={userList}
      options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 18, height: 18, tintColor: color }}
            source={require('./src/assets/icons/menu.png')}
          />
        )
      }}

    />
    <Tab.Screen

      name="addPost"
      component={addPost}
      options={{
        tabBarIcon: ({ color }) => (
          <AntDesign name='pluscircle' color={color} size={32} />

        )
      }}
    />
    <Tab.Screen
      name="chat"
      component={chatftn}
      options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 18, height: 18, tintColor: color }}
            source={require('./src/assets/icons/chat.png')}
          />

        )
      }}
    />

    <Tab.Screen
      name="profile"
      component={profile}
      options={{
        // tabBarVisible:false,
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 18, height: 18, tintColor: color }}
            source={require('./src/assets/icons/user1.png')}
          />

        )
      }}
    />
  </Tab.Navigator>
)

export default function App() {
  React.useEffect(() => {
    RNBootSplash.hide({ fade: true });
  })
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={DrawerFtn} />
        <Stack.Screen name="JoinUs" component={joinUs} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="signup" component={signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
});