import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';


const config = {
	apiKey: "AIzaSyB-BYsLba9iqyn-me7U5GDUDCgh0VloGDg",
	authDomain: "netflix-f8abd.firebaseapp.com",
	projectId: "netflix-f8abd",
	storageBucket: "netflix-f8abd.appspot.com",
	messagingSenderId: "1033974975835",
	appId: "1:1033974975835:web:0b9988de1cb08e5dc11e7e"
};


const firebase = Firebase.initializeApp(config);

export { firebase };



