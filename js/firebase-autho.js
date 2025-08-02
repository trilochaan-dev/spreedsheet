const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  function signInWithGoogle() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        alert("Signed in as: " + user.displayName);
        // Save user data or redirect, etc.
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
        alert("Error: " + error.message);
      });
  }

window.signInWithGoogle = signInWithGoogle;
