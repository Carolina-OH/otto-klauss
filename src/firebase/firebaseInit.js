import firebase from 'firebase'
import {firebaseConfig} from './firebaseConfig.js'


export const firebaseApp = firebase.initializeApp(firebaseConfig)