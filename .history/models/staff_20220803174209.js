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
    obStaff.calcType = function(){
        if(this.whs >= 192){
            return "Xuất sắc"
        }else if(this.whs >= 176){
            return "Giỏi"
        }else if(this.whs >= 160){
            return "Khá"
        }else{
            return "Trung bình"
        }
    }
    var trSt = `
        <tr>
            <td>${obStaff.username}</td>
            <td>${obStaff.name}</td>
            <td>${obStaff.email}</td>
            <td>${obStaff.dos}</td>
            <td>${obStaff.position}</td>
            <td>${obStaff.calcTotalSalary()}</td>
            <td>${obStaff.calcType()}</td>

        </tr>
    `;
    output += trSt;
  }
  document.querySelector("tbody").innerHTML = output;
  return output;
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
