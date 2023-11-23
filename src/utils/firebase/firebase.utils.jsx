import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCEV3SYmAtvFUFwHrUhscUt6KvB4Q9ATLw',
  authDomain: 'plant-haus-db-b9419.firebaseapp.com',
  projectId: 'plant-haus-db-b9419',
  storageBucket: 'plant-haus-db-b9419.appspot.com',
  messagingSenderId: '868663880490',
  appId: '1:868663880490:web:529bf5a3744f9ddcfe8c53',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
