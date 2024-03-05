var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  angular.module('chatApp', [])
    .controller('ChatController', function() {
      var vm = this;
      var database = firebase.database();
  
      vm.messages = [];
      vm.newMessage = '';
  
      var messagesRef = database.ref('messages');
  
      messagesRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        vm.messages.push(message);
      });
  
      vm.sendMessage = function() {
        if (vm.newMessage.trim() !== '') {
          messagesRef.push({
            sender: 'User', // You can replace this with the user's actual username
            text: vm.newMessage
          });
          vm.newMessage = '';
        }
      };
    });
  