
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBUdf3aJfaG8-xjfbd7aG1oVen4VppFzo0",
    authDomain: "mujeres-viajeras.firebaseapp.com",
    databaseURL: "https://mujeres-viajeras.firebaseio.com",
    projectId: "mujeres-viajeras",
    storageBucket: "mujeres-viajeras.appspot.com",
    messagingSenderId: "241750337262"
    };
    firebase.initializeApp(config);
    // make auth and firestore references
    const auth = firebase.auth();
    const db = firebase.firestore();
    // update firestore settings
    // db.settings({ timestampsInSnapshots: true });
 
// let uid=user.uid;

  
// function guardar() {
// let nombre= document.getElementById("nombre").value;
// let apellido= document.getElementById("apellido").value;
//   db.collection("users").add({
//       first: nombre,
//       last: apellido
   
//   })
//     .then(function (docRef) {
//       console.log("Document written with ID: ", docRef.id);
//       document.getElementById("nombre").value = "";
//       document.getElementById("apellido").value = "";
//     })
//     .catch(function (error) {
//       console.error("Error adding document: ", error);
//     });

// }