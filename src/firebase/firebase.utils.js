import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAvtl6OkEGLdpO2GYBFOfE0gWJucm6VtVo",
    authDomain: "crown-db-e2679.firebaseapp.com",
    projectId: "crown-db-e2679",
    storageBucket: "crown-db-e2679.appspot.com",
    messagingSenderId: "438423488910",
    appId: "1:438423488910:web:c5f96efc833a2958767cdf"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return ;

    // console.log(userAuth);

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
        
    }

    return userRef;

    // console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
