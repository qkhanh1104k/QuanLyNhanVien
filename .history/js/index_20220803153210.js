function Staff(username, name, email, password, dos, salary, positon, whs) {
  this.username = username;
  this.name = name;
  this.email = email;
  this.password = password;
  this.dos = dos;
  this.salary = salary;
  this.position = positon;
  this.whs = whs;
  this.calcTotalSalary = function () {
    var totalSalary = "";
    if (this.positon === "Sếp") {
      totalSalary = this.salary * 3;
    } else if (this.positon === "Trưởng phòng") {
      totalSalary = this.salary * 2;
    } else {
      totalSalary = this.salary;
    }
    return totalSalary;
  };
}
