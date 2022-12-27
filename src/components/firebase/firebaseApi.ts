import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";

import { setAuthByUser, setUserEmail, setUserName, store } from "store";
import { firebaseConfig } from "./config";
import { IUserLoginRequest, IUserRegisterRequest } from "./types";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

auth.onAuthStateChanged((user) => {
  if (user) {
    fetchUserInfo(user.uid).then((userInfo) => {
      store.dispatch(setUserEmail(userInfo.email));
      store.dispatch(setUserName(userInfo.name));
      store.dispatch(setAuthByUser(true));
    });
  } else {
    store.dispatch(setAuthByUser(false));
  }
});

const fetchUserInfo = async (userUid: string) => {
  const q = query(collection(db, "users"), where("uid", "==", userUid));
  const doc = await getDocs(q);
  return doc.docs[0].data();
};

const registerEmailAndPassword = async ({ name, email, password }: IUserRegisterRequest) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await addDoc(collection(db, "users"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email,
  });

  return { name, email, uid: user.uid };
};

const logInEmailAndPassword = async ({ email, password }: IUserLoginRequest) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const sendPasswordReset = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};

const logout = async () => {
  await signOut(auth);
};

export { auth, db, logInEmailAndPassword, registerEmailAndPassword, sendPasswordReset, logout };
