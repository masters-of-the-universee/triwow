import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID
} = process.env;
var firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const firestore = firebase.firestore();

class Database {
  getUsers() {
    let users = [];
    firestore
      .collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
      });
    return users;
  }
  async addUser(data) {
    const users = firestore.collection('users');
    try {
      const response = await users.add({ ...data, created_at: Date(), score: 0 });
      return response.id;
    } catch (err) {
      return err;
    }
  }
  async updateUser(id, score){
    const usersRef = firestore.collection("users");
    const selectedUser = await usersRef.where("id", "==", `${id}`)
    const data = await selectedUser.get()
    data.forEach(i => {
      usersRef.doc(i.id).update({
        "score" : score
      })
      i.data();
    })
  }
  async getMe(id){
    const usersRef = firestore.collection("users");
    const selectedUser = await usersRef.where("id", "==", `${id}`)
    const data = await selectedUser.get()
    let me;
    data.forEach(i => {
      me = i.data()
    })
    return me;
  }
  async getTopTen(){
    let list = [];
    const usersRef = firestore.collection("users");
    usersRef.orderBy("score", "desc").limit(20).get().then((snap) => snap.forEach(usr => list.push(usr.data())))
    return list;
  }
}

export default Database;
