import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar'
import database from '@react-native-firebase/database'


export const signUp = (data) => async (dispatch) => {
    console.log(data)
    const {name, Contact, bio, email, password,Address, country, image} = data

    auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {
        console.log(data)
        console.log("User creation was succes")

        database()
        .ref('/users/' + data.user.uid)
        .set({
            name, 
            Contact,
            email,
            country,
            image,
            bio,
            Address,
            uid: data.user.uid
        })
        .then(() => console.log('Data set success'))
        Snackbar.show({
            text: 'account created',
            textColor: 'white',
            backgroundColor: "#1b262c"
        })
    })
    .catch((error) => {
        console.error(error)
        Snackbar.show({
            text: "Signup failed",
            textColor: 'white',
            backgroundColor:'red'
        })
    })
}

export const signIn = (data) => async (dispatch) => {
    console.log(data)
    const {email, password} = data

    auth()
        .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("Sign in success")
                Snackbar.show({
                    text: "account signin",
                    textColor: "white",
                    backgroundColor: "#1b262c"
                })
            })
            .catch((error) => {
                console.error(error)
                Snackbar.show({
                    text: "Signin failed",
                    textColor: "white",
                    backgroundColor: "red"
                })
            })
}

export const signOut = () => async (dispatch) => {
    auth()
    .signOut()
    .then(() => {
        Snackbar.show({
            text: "SignOut success",
            textColor: "white",
            backgroundColor: "#1b262c"
        })
    })
    .catch((error) => {
        console.log(error)
        Snackbar.show({
            text: "Signout failed",
            textColor: "white",
            backgroundColor: "red"
        })
    })
}