function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

new Student();
new Student();
new Student();


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks) {
		for (mark of marks)
			this.marks.push(mark);

	}
}

Student.prototype.getAverage = function() {
	if (this.marks === undefined || this.marks.length === 0) {
		return 0;
	} else {
		return this.marks.reduce((a, v) => a + v / this.marks.length, 0);
	}
}