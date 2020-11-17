require('./db/mongoose');
const User = require("./models/user");
const Task = require("./models/task");


/********************************************

Task.findByIdAndDelete("5faa695a0a3e034ddce206f5")
	.then((task) => {
		console.log(task);
		return Task.countDocuments({ completed: false });
	})
	.then((tasks) => {
		console.log(tasks);
	})
	.catch((err) => {
		console.log(err);
  });

 * ******************************************/



  
/********************************************
 * Async-Await
 * ******************************************/

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age });
	const count = await User.countDocuments({ age });

	return count;
}

// updateAgeAndCount("5fab26628dcb5f3b80c82983", 21).then((count) => {
// 	console.log(count);
// }).catch((e) => {
// 	console.log(e);
// })

const deleteTaskAndCount = async (id) => {
	const delTask = await Task.findByIdAndDelete(id);
	const incTasksCount = await Task.countDocuments({ completed: false });

	return {deletedTask: delTask, incompleteTaskCount: incTasksCount};
}

deleteTaskAndCount("5fab26278dcb5f3b80c82980")
	.then((info) => {
		console.log(info);
	})
	.catch((e) => {
		console.log(e);
	});