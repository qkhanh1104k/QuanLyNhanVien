function kiemTraRong(value, selectorError, name) {
    //output: true | false
    // var valid = true;
    if (value === "") {
      // alert('mã sinh viên không được bỏ trống !');
      document.querySelector(selectorError).innerHTML =
        name + " không được bỏ trống";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  
  function kiemTraKyTu(value, selectorError, name) {
    var regex = /^[A-Z a-z]+$/;
    if (regex.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(selectorError).innerHTML =
      name + "tất cả phải là ký tự!";
    return false;
  }
  
  function kiemTraSo(value, selectorError, name) {
    var regex = /^[0-9]+$/;
    if (regex.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(selectorError).innerHTML = name + " phải là số!";
    return false;
  }
  
  function kiemTraEmail(value, selectorError, name) {
    var regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(selectorError).innerHTML =
      name + "phải đúng định dạng ! Ví dụ: abc@domain.com!";
    return false;
  }
  
  function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
    if (value.length > maxLength || value.length < minLength) {
      document.querySelector(selectorError).innerHTML =
        name + " từ " + minLength + " đến " + maxLength + " ký tự!";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  
  function kiemTraGiaTri(value, selectorError, name, minValue, maxValue) {
    if (Number(value) < minValue || Number(value) > maxValue || value.trim() ==="") {
      document.querySelector(selectorError).innerHTML =
        name + " từ " + minValue + " đến " + maxValue + " !";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }