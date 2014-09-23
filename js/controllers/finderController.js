angular.module('finderApp.controllers', []).
controller('finderController', function($scope) {
    $scope.shopsList = [
      {
          Address: "Street 12, 3001 Zürich",
          Phone: "+41 25 254 17 14",
		  Title: "Loeb AG",
		  LikesCount: 34,
		  CommentCount: 23,
		  FavoritCount: 1,
		  State: "geöffnet",
          Opening: "09:00 - 19:00"
      },
      {
          Address: "Street 31, 3001 Basel",
          Phone: "+41 31 222 22 23",
		  Title: "Globus AG",
		  LikesCount: 34,
		  CommentCount: 23,
		  FavoritCount: 1,
		  State: "geöffnet",
          Opening: "09:00 - 19:00"
      },
      {
          Address: "Street 31, 3001 Basel",
          Phone: "+41 31 222 22 23",
		  Title: "Globus AG",
		  LikesCount: 34,
		  CommentCount: 23,
		  FavoritCount: 1,
		  State: "geöffnet",
          Opening: "09:00 - 19:00"
      },
      {
          Address: "Street 31, 3001 Basel",
          Phone: "+41 31 222 22 23",
		  Title: "Globus AG",
		  LikesCount: 34,
		  CommentCount: 23,
		  FavoritCount: 1,
		  State: "geöffnet",
          Opening: "09:00 - 19:00"
      }
    ];
});