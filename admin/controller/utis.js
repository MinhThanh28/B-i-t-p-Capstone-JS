let getEle = (id) => document.getElementById(id);
export class Helper {
  constructor() {
    this.inpArr = ['name', 'price', 'screen', 'backCam', 'frontCam', 'img', 'desc', 'type'];
    this.tbArr = [
      'tbname',
      'tbprice',
      'tbscreen',
      'tbbackCam',
      'tbfrontCam',
      'tbimg',
      'tbdesc',
      'tbtype',
    ];
  }

  getInputValue() {
    return this.inpArr.map((ele) => getEle(ele).value);
  }
  fill(arr) {
    let fields = this.inpArr.map((ele) => getEle(ele));
    fields.forEach((ele, id) => {
      ele.value = arr[id];
    });
  }
  clearTB() {
    this.tbArr.forEach((id) => {
      getEle(id).innerHTML = '';
    });
  }
}

export class CustomModal {
  static alertSuccess = (message) => {
    return Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  static alertDelete = (message) => {
    return Swal.fire({
      title: 'Are you sure?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
    });
  };
}
