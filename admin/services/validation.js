export default class Validation {
  // kiểm tra rỗng
  kiemTraRong(value, spanId, message) {
    if (value === "") {
      document.getElementById(spanId).innerHTML = message;
      return false;
    }
    document.getElementById(spanId).innerHTML = "";
    return true;
  }
  // kiểm tra độ dài ký tự
  kiemTraDoDaiKyTu(value, spanId, message, min, max) {
    if (value.length < min || value.length > max) {
      document.getElementById(spanId).innerHTML = message;
      return false;
    }
    document.getElementById(spanId).innerHTML = "";
    return true;
  }
  // kiểm tra chuỗi ký tự
  kiemTraChuoiKyTu(value, spanId, message) {
    const letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
        document.getElementById(spanId).innerHTML = "";
        return true;
    }
    document.getElementById(spanId).innerHTML = message;
    return false;
  }
  // kiểm tra số
    kiemTraSo(value, spanId, message) {
        const number = "^[0-9]+$";
        if (value.match(number)) {
            document.getElementById(spanId).innerHTML = "";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        return false;
    }
}
