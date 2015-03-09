angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

/*
.controller("StartCtrl", function($cordovaNfc, $cordovaNfcUtil){

    //Because of the problem about the async-ness of the nfc plugin, we need to wait
    //for it to be ready.
    $cordovaNfc.then(function(nfcInstance){

        //Use the plugins interface as you go, in a more "angular" way
        $cordovaNfcInstance.addNdefListener(function(event){
            //Callback when ndef got triggered
        })
            .then(
            //Success callback
            function(event){
                alert("bound success");
            },
            //Fail callback
            function(err){
                alert("error");
            });
    });

    $cordovaNfcUtil.then(function(nfcUtil){
        alert( nfcUtil.bytesToString("some bytes") )
    });
})
*/


.controller('SettingsCtrl', function($scope, Settings) {
    console.log("settings!!!");

    $scope.settings = {
        enableRemote: false
    };

    $scope.statuses = Settings.allStatuses();

    $scope.removeStatus = function(status) {
        Settings.removeStatus(status);
    }

    $scope.addStatus = function(status) {
        Settings.addStatus(status);
    }

});
