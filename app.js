var myapp=angular.module('poleapp',['ngMap']);
myapp.controller('polecontroller',['$http',function($http){
	var main=this;
	this.heading='now';
	this.object={};
	console.log(this.object);
	this.baseurl="http://test.poletalks.com/websites/getData";
	this.loaddata=function(){
		$http({
			method:'GET',
			url:main.baseurl
		}).then(function successcallback(response){
			console.log(response);
			main.object=response.data;
			console.log(main.object);
		},function errorcallback(response){
			console.log("check your console");
		}

		)
	}
}]);