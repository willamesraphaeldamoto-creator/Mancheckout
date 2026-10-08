import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

let app;
let auth;
let db;

export function getFirebaseApp() {
  if (!app) app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  return app;
}

export function getAuthInstance() {
  if (!auth) auth = getAuth(getFirebaseApp());
  return auth;
}

export function getDbInstance() {
  if (!db) db = getFirestore(getFirebaseApp());
  return db;
}