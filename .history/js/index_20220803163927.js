function Staff(username, name, email, password, dos, salary, position, whs) {
  this.username = username;
  this.name = name;
  this.email = email;
  this.password = password;
  this.dos = dos;
  this.salary = salary;
  this.position = position;
  this.whs = whs;
  this.calcTotalSalary = function () {
    var totalSalary = "";
    if (this.position === "Sếp") {
      totalSalary = this.salary * 3;
    } else if (this.position === "Trưởng phòng") {
      totalSalary = this.salary * 2;
    } else {
      totalSalary = this.salary;
    }
    return totalSalary;
  };
}
