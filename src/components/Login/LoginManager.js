import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";


// Initialize Firebase
export const initializeFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

// Goggle Sign In Function
export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const { displayName, email } = result.user;
            const signInUser = {
                name: displayName,
                email: email
            }
            return signInUser;
        })
        .catch(error => {
            const { errorCode, errorMessage, email } = error;
            const signInUserError = {
                code: errorCode,
                message: errorMessage,
                email: email
            }
            return signInUserError;
        });
}

// Sign In with Email and Password]
export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            return newUserInfo;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            return newUserInfo;
        });
}

// //  Id Token
// export const authToken = () => {
//     return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
//         .then(idToken => {
//             const token = idToken;
//             return token;
//         })
//         .catch(error => {
//             // Handle error
//         });
// }