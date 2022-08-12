var staffList = [];

function createStaff() {
  //1. lấy thông tin từ input
  var staffUsername = document.getElementById("tknv").value;
  var staffName = document.getElementById("name").value;
  var staffEmail = document.getElementById("email").value;
  var staffPassword = document.getElementById("password").value;
  var staffDos = document.getElementById("datepicker").value;
  var staffSalary = document.getElementById("luongCB").value;
  var staffPosition = document.getElementById("chucvu").value;
  var staffWhs = document.getElementById("gioLam").value;
  //2. tạo đối tượng nhân viên
  var staff = new Staff(
    staffUsername,
    staffName,
    staffEmail,
    staffPassword,
    staffDos,
    staffSalary,
    staffPosition,
    staffWhs
  );
  console.log(staff);
  //4.push đối tượng nhân viên vào danh sách
  staffList.push(staff);

  renderStaffList(staffList);
}

function renderStaffList(arrSt) {
  var output = "";
  for (var index = 0; index < arrSt.length; index++) {
    var obStaff = arrSt[index];
    obStaff.calcTotalSalary = function () {s
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
    var trSt = `
        <tr>
            <td>${obStaff.username}</td>
            <td>${obStaff.name}</td>
            <td>${obStaff.email}</td>
            <td>${obStaff.dos}</td>
            <td>${obStaff.position}</td>
            <td>${obStaff.calcTotalSalary}</td>
            <td>${obStaff.username}</td>
        </tr>
    `;
    output += trSt;
  }
  document.querySelector("tbody").innerHTML = output;
  return output;
}
