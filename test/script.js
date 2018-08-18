let user = {
	sayHi: function() {
	  alert(this);
	}
  };
  
  (user.sayBye = user.sayHi)();