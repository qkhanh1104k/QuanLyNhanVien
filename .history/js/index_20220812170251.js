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
  //-------------------------------Kiểm tra dữ liệu đầu vào-----------------------------------
  //1.kiểm tra rỗng
  var valid = true;
  valid &=
    kiemTraRong(staff.username, "#tbTKNV", "Tài khoản") &
    kiemTraRong(staff.name, "#tbTen", "Tên") &
    kiemTraRong(staff.email, "#tbEmail", "Email") &
    kiemTraRong(staff.password, "#tbMatKhau", "Mật khẩu") &
    kiemTraRong(staff.dos, "#tbNgay", "Ngày") &
    kiemTraRong(staff.salary, "#tbLuongCB", "Mức lương ") &
    kiemTraRong(staff.whs, "#tbGiolam", "Số giờ làm");

  //5.Kiểm tra email
  valid &= kiemTraEmail(staff.email, "#tbEmail", "Email ");

  //2.kiểm tra ký số
  valid &=
    kiemTraDoDai(staff.username, "#tbTKNV", "Tài khoản", 4, 6) &
    kiemTraDoDai(staff.password, "#tbMatKhau", "Mật khẩu", 6, 10);

  // 3.Kiểm tra ký tự là chữ
  valid &= kiemTraKyTu(staff.name, "#tbTen", "Tên");

  // 4.kiểm tra gia trị
  valid &=
    kiemTraGiaTri(staff.salary, "#tbLuongCB", "Tiền lương", 1000000, 20000000) &
    kiemTraGiaTri(staff.whs, "#tbGiolam", "Số giờ làm", 80, 200);

  if (!valid) {
    return;
  }

  //4.push đối tượng nhân viên vào danh sách
  staffList.push(staff);

  renderStaffList(staffList);

  saveLocalStorage(staffList, "arrStaff");
}

function renderStaffList(arrSt) {
  var output = "";
  for (var index = 0; index < arrSt.length; index++) {
    var obStaff = arrSt[index];
    obStaff.calcTotalSalary = function () {
      var totalSalary = "";
      if (this.position == "Sếp") {
        totalSalary = this.salary * 3;
      } else if (this.position == "Trưởng phòng") {
        totalSalary = this.salary * 2;
      } else {
        totalSalary = this.salary;
      }
      return totalSalary;
    };
    obStaff.calcType = function () {
      if (this.whs >= 192) {
        return "Xuất sắc";
      } else if (this.whs >= 176) {
        return "Giỏi";
      } else if (this.whs >= 160) {
        return "Khá";
      } else {
        return "Trung bình";
      }
    };
    var trSt = `
        <tr>
            <td>${obStaff.username}</td>
            <td>${obStaff.name}</td>
            <td>${obStaff.email}</td>
            <td>${obStaff.dos}</td>
            <td>${obStaff.position}</td>
            <td>${obStaff.calcTotalSalary()}</td>
            <td>${obStaff.calcType()}</td>
            <td>
                <button class="btn btn-danger" onclick="delStaff('${
                  obStaff.username
                }')">Del</button>
                <button class="btn btn-primary" data-toggle="modal"
                data-target="#myModal" onclick="editStaff('${
                  obStaff.username
                }')">Update</button>
            </td>

        </tr>
    `;
    output += trSt;
  }
  document.querySelector("tbody").innerHTML = output;
  return output;
}

function delStaff(idClick) {
  var indexDel = -1;
  for (var index = staffList.length - 1; index >= 0; index--) {
    if (staffList[index].username == idClick) {
      indexDel = index;
      staffList.splice(indexDel, 1);
    }
  }
  renderStaffList(staffList);
}

function editStaff(idClick) {
  var svEdit = null;
  for (var index = 0; index < staffList.length; index++) {
    if (staffList[index].username == idClick) {
      //Tại vị trí này tìm thấy idClick = id object trong mảng
      svEdit = staffList[index];
      break;
    }
  }
  if (svEdit !== null) {
    //đưa dữ liệu lên các control input
    document.querySelector("#tknv").value = svEdit.username;
    document.querySelector("#name").value = svEdit.name;
    document.querySelector("#email").value = svEdit.email;
    document.querySelector("#password").value = svEdit.password;
    document.querySelector("#datepicker").value = svEdit.dos;
    document.querySelector("#luongCB").value = svEdit.salary;
    document.querySelector("#chucvu").value = svEdit.position;
    document.querySelector("#gioLam").value = svEdit.whs;
  }
}
function updateStaff() {
  var staffUpdate = new Staff();
  staffUpdate.username = document.querySelector("#tknv").value;
  staffUpdate.name = document.querySelector("#name").value;
  staffUpdate.email = document.querySelector("#email").value;
  staffUpdate.password = document.querySelector("#password").value;
  staffUpdate.dos = document.querySelector("#datepicker").value;
  staffUpdate.salary = document.querySelector("#luongCB").value;
  staffUpdate.position = document.querySelector("#chucvu").value;
  staffUpdate.whs = document.querySelector("#gioLam").value;

  let indexEdit = -1;
  for (var index = 0; index < staffList.length; index++) {
    if (staffList[index].username === staffUpdate.username) {
      indexEdit = index;
      break;
    }
  }
  if (indexEdit !== -1) {
    staffList[indexEdit].username = staffUpdate.username;
    staffList[indexEdit].name = staffUpdate.name;
    staffList[indexEdit].email = staffUpdate.email;
    staffList[indexEdit].password = staffUpdate.password;
    staffList[indexEdit].dos = staffUpdate.dos;
    staffList[indexEdit].salary = staffUpdate.salary;
    staffList[indexEdit].position = staffUpdate.position;
    staffList[indexEdit].whs = staffUpdate.whs;
    renderStaffList(staffList);
  }
}

/**
 * Hàm lưu trữ object({}) hoặc array ([]) vào localstorage
 * @param {*} ob Dữ liệu cần lưu
 * @param {*} key keyName trong localstorage
 */

function saveLocalStorage(ob, key) {
  // {} , []
  var str = JSON.stringify(ob);
  localStorage.setItem(key, str);
}

function getLocalStorage(key) {
  //Lấy dữ liệu từ localstorage ra (dữ liệu lấy là string)
  if (localStorage.getItem(key)) {
    var str = localStorage.getItem(key);
    //Parse dữ liệu về lại object
    var ob = JSON.parse(str);
    return ob;
  }
  return undefined;
}
//đợi html js load xong thì sẽ động thực thi
window.onload = function () {
  //Lấy ra array sinh viên từ localstorage gán vào studenList
  staffList = getLocalStorage("arrStaff");
  // console.log("studentList", studentList);
  if (staffList == undefined) {
    staffList = [];
  }
  renderStaffList(staffList);
};
