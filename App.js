import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { AuthProvider, useAuth } from './src/AuthContext';
import { C } from './src/theme';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import LinksScreen from './src/screens/LinksScreen';
import LinkFormScreen from './src/screens/LinkFormScreen';
import ChargeScreen from './src/screens/ChargeScreen';
import WithdrawScreen from './src/screens/WithdrawScreen';
import MoreScreen from './src/screens/MoreScreen';
import DocsScreen from './src/screens/DocsScreen';
const Stack=createNativeStackNavigator(),Tab=createBottomTabNavigator();
const ICONS={Início:'home',Links:'link',Cobrar:'qr-code',Saque:'arrow-down-circle',Mais:'menu'};
function Tabs(){return <Tab.Navigator screenOptions={({route})=>({headerShown:false,tabBarActiveTintColor:C.pine,tabBarInactiveTintColor:C.mute,tabBarStyle:{backgroundColor:'#fff',borderTopColor:C.line,height:62,paddingBottom:8,paddingTop:6},tabBarLabelStyle:{fontWeight:'700',fontSize:11},tabBarIcon:({color,size})=><Ionicons name={ICONS[route.name]} size={size} color={color}/>})}><Tab.Screen name="Início" component={HomeScreen}/><Tab.Screen name="Links" component={LinksScreen}/><Tab.Screen name="Cobrar" component={ChargeScreen}/><Tab.Screen name="Saque" component={WithdrawScreen}/><Tab.Screen name="Mais" component={MoreScreen}/></Tab.Navigator>}
function Root(){const {user,ready}=useAuth();if(!ready)return <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:C.bg}}><ActivityIndicator color={C.pine} size="large"/></View>;return <Stack.Navigator screenOptions={{headerTintColor:C.ink,headerShadowVisible:false,headerStyle:{backgroundColor:C.bg}}}>{user?<><Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/><Stack.Screen name="LinkForm" component={LinkFormScreen} options={{title:'Link de pagamento'}}/><Stack.Screen name="Docs" component={DocsScreen} options={{title:'Documentação e API'}}/></>:<Stack.Screen name="Auth" component={AuthScreen} options={{headerShown:false}}/>}</Stack.Navigator>}
export default function App(){return <SafeAreaProvider><AuthProvider><NavigationContainer><StatusBar style="dark"/><Root/></NavigationContainer></AuthProvider></SafeAreaProvider>}
