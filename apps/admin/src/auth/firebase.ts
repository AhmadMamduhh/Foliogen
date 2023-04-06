import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';

// web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
	appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

// Authentication functions

/**
 * This functions takes an email and password and tries to log the user into the web app
 * @param email : the user's email address
 * @param password : the user's password
 * @returns Promise<boolean> : promise which is true if login is successful and false otherwise.
 */
export const logInWithEmailAndPassword = async (email: string, password: string): Promise<boolean> => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
};

/**
 * This function creates a new admin user.
 * @param name : user's name
 * @param email : user's email address
 * @param password : user's password
 */
export const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, 'users'), {
			uid: user.uid,
			name,
			authProvider: 'local',
			email,
		});
	} catch (err) {
		console.error(err);
	}
};

/**
 * This function sends a reset password email for the given email of the user
 * @param email : user's email address
 * @returns Promise<boolean> : promise which is true if email is sent and false otherwise.
 */
export const sendPasswordReset = async (email: string): Promise<boolean> => {
	try {
		await sendPasswordResetEmail(auth, email);
		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
};

/**
 * This function logs the current user out of the web app
 */
export const logout = (): void => {
	signOut(auth);
};
