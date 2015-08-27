var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){ //if you want to export from another modules and other functions
	router.route('/students')
		.get(student.find)
		.post(student.insert);
	router.route('/students/:id')
		.get(student.findOne)
		.put(student.update)
		.delete(student.remove);
	
	router.route('/teachers')
		.get(teacher.view)
		.post(teacher.add)
		.put(teacher.update)
		.delete(teacher.delete);
	
  
	return router;
};
