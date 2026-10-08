import {initializeApp,getApps,getApp} from 'firebase/app';
import {initializeAuth,getAuth,getReactNativePersistence} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebaseConfig} from './config';
const fresh=getApps().length===0;
export const app=fresh?initializeApp(firebaseConfig):getApp();
export const auth=fresh?initializeAuth(app,{persistence:getReactNativePersistence(AsyncStorage)}):getAuth(app);
export const db=getFirestore(app);
