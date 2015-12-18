// angular.module('matisse', [])
// .config(['$interpolateProvider', function($interpolateProvider) {
//     $interpolateProvider.startSymbol('{!');
//     $interpolateProvider.endSymbol('!}');
// }])
// .controller('AppController', ['$scope', 'ImageService',
//     function($scope, ImageService) {
//         $scope.name = "Heather";

//         $scope.analyzePhoto = function(photoUid) {
//             ImageService.categorizePhoto(photoUid).then(function(response) {
//                 $scope.result = response;
//                 $scope.processed = true;
//             })
//         }
//     }
// ])
// .factory('ImageService', ['$http',
//     function($http) {
//         return {
//             categorizePhoto: function(photoUid) {
//                 return $http.get('/app/analyze/' + photoUid).then(function(response) {
//                     return response.data;
//                 })
//             }
//         }
//     }
//     ])
