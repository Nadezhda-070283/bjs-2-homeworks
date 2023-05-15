function compareArrays(arr1, arr2) {
  
	return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {

	return users.filter(user => gender === user.gender).map(user => user.age).reduce((summator, age, index, userAges) => summator + age / userAges.length, 0);
}