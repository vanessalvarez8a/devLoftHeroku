angular.module('devLoftApp')
.controller('newProjectCtrl', function( $scope, projectService, $http, $state, currentuser ) {

  $scope.newProjectData = {};

	$scope.addProject = function() {
    projectService.addProject($scope.newProjectData, $scope.user._id).then(function(res) { //semantically $scope.newProjectData and the $scope.user.id will be added to the addProject()
      console.log(res);
      $state.go('showcase');
    })
	};

  $scope.user = currentuser;
  $scope.userProjects = currentuser.projects;
  console.log($scope.userProjects);
  console.log('$scope.user', $scope.user);

  $scope.deleteProject = function(id) {
    projectService.deleteProject(id).then(function(res) {
      // $scope.userProjects.splice(idx, 1);
    })
  }

// CHANGES
  $scope.putProject = function(id, upd, idx) { //grabbing the index from the controller
    console.log('putting project', upd);
    projectService.putProject(id, upd).then(function(res) {
        console.log('updated data', res)
        for(var k in $scope.userProjects[idx]){
          if(upd[k]){ //looping through the object
            console.log('nope, already exists');
          } else {
            upd[k] = $scope.userProjects[idx][k]; //$scope.userProjects[index][key]
          }
        }
        $scope.userProjects[idx] = upd;
        console.log($scope.userProjects[idx]);
        console.log(upd);
    })
  }



});

// $scope.deleteProject = function(id) {
//   projectService.deleteProject(id).then(function(res) {
//       // projectService.getProjects('user', $scope.user._id).then(function(res){
//       //   console.log(res)
//       //   $scope.userProjects = res;
//       // })
//   })
// }
