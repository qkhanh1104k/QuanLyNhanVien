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
  console.log(staff)
  //4.push đối tượng nhân viên vào danh sách
  staffList.push(staff);
}
