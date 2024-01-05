import Products from "../model/Products.js";
import Api from "../service/api.js";
import Validation from "../service/validation.js";
const getEle = (id) => document.getElementById(id);
const validation = new Validation();
/**
 * render products list
 */
const renderUI = (data) => {
  let content = "";
  data.forEach((product) => {
    content += `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><img src="${product.img}" style="width: 100px; height: auto;" /></td>
            <td>${product.desc}</td>
            <td>
                <button class="btn btn-info btn-update" onclick="editProduct(${product.id})" data-bs-toggle="modal"
                data-bs-target="#exampleModal" >Edit</button>
                <button class="btn btn-danger btn-delete" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        </tr>
        `;
  });
  getEle("tablePhone").innerHTML = content;
};
/**
 * get list products
 */
const getProducts = () => {
  const api = new Api();
  api
    .fetchData()
    .then((result) => {
      console.log(result.data);
      renderUI(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
getProducts();
/**
 * add products
 */
getEle("btnAddPhone").onclick = () => {
  // get value from form
  const name = getEle("name").value;
  const price = getEle("price").value;
  const screen = getEle("screen").value;
  const backCamera = getEle("backCam").value;
  const frontCamera = getEle("frontCam").value;
  const img = getEle("img").value;
  const desc = getEle("desc").value;
  const type = getEle("type").value;
  // flag
  let isValid = true;
  // validation phone name
  isValid &=
    validation.kiemTraRong(name, "tbname", "Phone name is required") &&
    validation.kiemTraDoDaiKyTu(
      name,
      "tbname",
      "Phone name must be from 2 to 50 characters",
      2,
      50
    );
  // validation price
  isValid &=
    validation.kiemTraRong(price, "tbprice", "Price is required") &&
    validation.kiemTraSo(price, "tbprice", "Price must be a number");
  // validation screen
  isValid &=
    validation.kiemTraRong(screen, "tbscreen", "Screen is required") &&
    validation.kiemTraSo(screen, "tbscreen", "Screen must be a number");
  // validation back camera
  isValid &=
    validation.kiemTraRong(
      backCamera,
      "tbbackCam",
      "Back camera is required"
    ) &&
    validation.kiemTraSo(
      backCamera,
      "tbbackCam",
      "Back camera must be a number"
    );
  // validation front camera
  isValid &=
    validation.kiemTraRong(
      frontCamera,
      "tbfrontCam",
      "Front camera is required"
    ) &&
    validation.kiemTraSo(
      frontCamera,
      "tbfrontCam",
      "Front camera must be a number"
    );
  // validation img
  isValid &=
    validation.kiemTraRong(img, "tbimg", "Image is required") &&
    validation.kiemTraDoDaiKyTu(
      img,
      "tbimg",
      "Image must be from 2 to 50 characters",
      0,
      1000
    );
  // validation desc
  isValid &=
    validation.kiemTraRong(desc, "tbdesc", "Description is required") &&
    validation.kiemTraDoDaiKyTu(
      desc,
      "tbdesc",
      "Description must be from 2 to 50 characters",
      0,
      500
    );
  if (!isValid) return;
  // create new product
  const product = new Products(
    "",
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
  // call api to add product
  const api = new Api();
  api
    .createData(product)
    .then((result) => {
      console.log(result);
      // thông báo thêm thành công
      alert("Add success");
      // đóng modal sau khi thêm thành công, dom đến button có id btnClose
      document.querySelector("#btnClose").click();
      getProducts();
    })
    .catch((err) => {
      console.log(err);
    });
};
getEle("addPhoneForm").onclick = () => {
  getEle("header-title").innerHTML = "Add Product";
  // ẩn nút update
  getEle("btnUpdate").style.display = "none";
  // hiển thị nút add
  getEle("btnAddPhone").style.display = "block";
};
/**
 * Edit products
 */

const editProduct = (id) => {
  getEle("header-title").innerHTML = "Update Product";
  // hiển thị nút update
  getEle("btnUpdate").style.display = "block";
  // ẩn nút add
  getEle("btnAddPhone").style.display = "none";
  // lấy thông tin chi tiết product => hiển thị ra các thẻ input
  const api = new Api();
  api
    .getDataById(id)
    .then((result) => {
      console.log(result.data);
      const product = result.data;
      getEle("name").value = product.name;
      getEle("price").value = product.price;
      getEle("screen").value = product.screen;
      getEle("backCam").value = product.backCamera;
      getEle("frontCam").value = product.frontCamera;
      getEle("img").value = product.img;
      getEle("desc").value = product.desc;
      getEle("type").value = product.type;
      // lấy thông tin product => gán vào data-id của button update
      getEle("btnUpdate").dataset.id = product.id;
    })
    .catch((err) => {
      console.log(err);
    });
};
window.editProduct = editProduct;
/**
 * delete products
 */
const deleteProduct = (id) => {
  const api = new Api();
  api
    .deleteData(id)
    .then((result) => {
      console.log(result);
      // thông báo xóa thành công
      alert("Delete success");
      getProducts();
    })
    .catch((err) => {
      console.log(err);
    });
};
window.deleteProduct = deleteProduct;
/**
 * update products
 */
getEle("btnUpdate").onclick = () => {
  // get value from form
  const id = getEle("btnUpdate").dataset.id;
  const name = getEle("name").value;
  const price = getEle("price").value;
  const screen = getEle("screen").value;
  const backCamera = getEle("backCam").value;
  const frontCamera = getEle("frontCam").value;
  const img = getEle("img").value;
  const desc = getEle("desc").value;
  const type = getEle("type").value;
  // create new product
  const product = new Products(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
  // call api to update product
  const api = new Api();
  api
    .updateData(id, product)
    .then((result) => {
      console.log(result);
      // thông báo update thành công
      alert("Update success");
      // đóng modal sau khi update thành công, dom đến button có id btnClose
      document.querySelector("#btnClose").click();
      getProducts();
    })
    .catch((err) => {
      console.log(err);
    });
};

// tìm kiếm sản phẩm theo tên
getEle("searchName").onkeyup = () => {
  const keyword = getEle("searchName").value;
  const api = new Api();
  api
    .fetchData()
    .then((result) => {
      const data = result.data;
      const filterData = data.filter((product) => {
        return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
      renderUI(filterData);
    })
    .catch((err) => {
      console.log(err);
    });
};
/**
 * sắp xếp sản phẩm theo giá button id sortByPrice
 *  lần đầu click => sắp xếp tăng dần
 *  lần 2 click => sắp xếp giảm dần
 */
let isSorted = false;
getEle("sortByPrice").onclick = () => {
  const api = new Api();
  api
    .fetchData()
    .then((result) => {
      const data = result.data;
      if (!isSorted) {
        data.sort((a, b) => {
          return a.price - b.price;
        });
        isSorted = true;
      } else {
        data.sort((a, b) => {
          return b.price - a.price;
        });
        isSorted = false;
      }
      renderUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
