// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const cors = require('cors')({origin: true});

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.test = functions.https.onRequest((req, res) => {
  res.send('Hello');
  // var db = admin.database();
  // var ref = db.ref("/tasks");
  // ref.once("value", function(snapshot) {
    // var count = snapshot.numChildren();
    // res.status(200).json({ count: count });
  // });
});

exports.countTasks = functions.https.onRequest((req, res) => {

  cors(req, res, () => {

    var db = admin.database();
    var ref = db.ref("/tasks");

    ref.once("value", function(snapshot) {
      var count = snapshot.numChildren();
      res.send({ count: count });
    });
  });
});
