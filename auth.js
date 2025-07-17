// auth.js

document.addEventListener('DOMContentLoaded', () => {
  const auth = window.firebaseAuth;
  const db = window.firebaseDB;

  const signupForm = document.querySelector('#signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = signupForm.querySelector('#email').value.trim();
      const password = signupForm.querySelector('#password').value.trim();
      const name = signupForm.querySelector('#name').value.trim();

      try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        await db.collection('users').doc(user.uid).set({
          email,
          name,
          isPaid: false,
          skoolInviteSent: false
        });

        alert('Signed up! You will receive a Skool invite.');
      } catch (err) {
        console.error('Signup error:', err.message);
        alert('Error: ' + err.message);
      }
    });
  }

  const loginForm = document.querySelector('#login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('#email').value.trim();
      const password = loginForm.querySelector('#password').value.trim();

      try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        const doc = await db.collection('users').doc(user.uid).get();

        if (doc.exists && doc.data().isPaid) {
          alert('Login successful — access granted!');
        } else {
          alert('You need to complete your payment on Skool to access the platform.');
        }
      } catch (err) {
        console.error('Login error:', err.message);
        alert('Error: ' + err.message);
      }
    });
  }
});