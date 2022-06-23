// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDVUKp2xLHq9kQQ_v4EwziyX3jCwTlfPRE',
	authDomain: 'blog-7f4b8.firebaseapp.com',
	projectId: 'blog-7f4b8',
	storageBucket: 'blog-7f4b8.appspot.com',
	messagingSenderId: '101742343671',
	appId: '1:101742343671:web:e46befa53c5a9a9d656af2',
	measurementId: 'G-FFZ214SXMC',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const database = getDatabase(app)
export const auth = getAuth(app)
