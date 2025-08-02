import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Signed in as: " + user.displayName);
    })
    .catch((error) => {
      console.error("Sign-in failed", error);
    });
}
