// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.test = functions.https.onRequest((req, res) => {
  res.send('Test passed');
});

exports.countTasks = functions.https.onRequest((req, res) => {
  var db = admin.database();
  var ref = db.ref("/tasks");

  ref.once("value", function(snapshot) {
    var count = snapshot.numChildren();
    res.send({ count: count });
  });
});
