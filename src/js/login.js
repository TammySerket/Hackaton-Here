// Registro
function registerWithFirebase(){
    const emailValue = email.value;
    const passwordValue = password.value;

    if(emailValue.length != 0 && passwordValue.length != 0) {
        console.log('if');
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            console.log("Usuario creado con éxito");
            location.href ="./main.html";
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}};

// Login
function loginWithFirebase(){
    const emailValue = email.value;
    const passwordValue = password.value;

    if(emailValue.length != 0 && passwordValue.length != 0) {
            
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            console.log("Usuario inició sesión con éxito");
            location.href ="./main.html";
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}}

// Facebook Login
function loginFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(() => {
        console.log('Usuario logueado correctamente');
        window.open('./main.html', '_self', 'true');
      })
      .catch((error) => {
        console.log('Error de Firebase: ' + error.code);
        console.log('Mensaje de error de Firebase: ' + error.message);
      });
}

function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        // ...
      }).then(() => {
        console.log('Usuario logueado correctamente');
        window.open('./muro.html', '_self', 'true');
      }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
      });
}

function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        location.href ="mainVisitor.html";
      }).catch(function(error) {
        // An error happened.
      });
}

