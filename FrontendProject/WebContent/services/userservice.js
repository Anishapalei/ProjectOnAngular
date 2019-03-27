/**
 * 
 */

/**
 * UserService  -  to make service side calls
 */

app.factory('UserService',function($http){

	    var userService={}
	    
	    userService.registerUser=function(user){  
	    	console.log('entering userservice registerUser function in frontend '+JSON.stringify(user));
	   return $http.post("http://localhost:8081/MiddlewareProject/registerUser",user);
	    	
	    }
	    userService.login=function(user){
	    	console.log('userService-> login')
	    	console.log(user)
	    	return $http.post("http://localhost:8081/MiddlewareProject/login",user)
	    	
	    }
	    userService.logout=function(user){
	    	return $http.put("http://localhost:8081/MiddlewareProject/logout",user)
	    	
	    }
 	    userService.getUser=function(){
 	    	return $http.get("http://localhost:8081/MiddlewareProject/getuser",user)
 	    	
 	    	
 	    }
	    userService.updateUser=function(user){
	    	return $http.put("http://localhost:8081/MiddlewareProject/updateuser",user)
	    	
	    }
	    return userService;
})