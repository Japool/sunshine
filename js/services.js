angular.module('starter.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  chats=[];
  return {
 
    hoy: function() {
      return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=Cancun,mx&mode=json');
    },

    all: function() {
      return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=Cancun,mx&mode=json');
    },

    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].$$hashKey === chatId) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
