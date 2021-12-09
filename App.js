import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Image, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import joinUs from './src/screens/joinUs';
import home from './src/screens/home';
import list from './src/screens/list';
import chat from './src/screens/chat';
import addPost from './src/screens/addPost';
import searchCategory from './src/screens/searchCategory';
import { COLORS } from './src/constants';
import CustomDrawer from './src/components/CustomDrawer';
import profile from './src/screens/profile';
import specialItem from './src/screens/specialItem';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
      component={searchCategory}
    />

    <Drawer.Screen
      name="specialItem"
      component={specialItem}
    />

  </Drawer.Navigator>

)

const tab = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: { height: 60 }

    }
    }
  >
    <Tab.Screen
      name="home"
      component={home}
      options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 24, height: 24 }}
            source={require('./src/assets/icons/search1.png')}
          />

        )
      }}
    />
    <Tab.Screen
      name="list"
      component={list}
      options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 24, height: 24 }}
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
          <Image
            style={{ width: 40, height: 40 }}
            source={require('./src/assets/icons/addmore.png')}
          />

        )
      }}
    />
    <Tab.Screen
      name="chat"
      component={chat}
      options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 24, height: 24 }}
            source={require('./src/assets/icons/chat.png')}
          />

        )
      }}
    />

    <Tab.Screen
      name="profile"
      component={profile}
      options={{
        tabBarVisible:false,
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 24, height: 24 }}
            source={require('./src/assets/icons/user1.png')}
          />

        )
      }}
    />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="JoinUs" component={joinUs} />
        <Stack.Screen name="Home" component={DrawerFtn} />
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