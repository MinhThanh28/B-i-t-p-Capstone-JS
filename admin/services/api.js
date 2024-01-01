export default class Api {
  fetchData() {
    return axios({
      url: "https://65900a3fcbf74b575eca648d.mockapi.io/Products",
      method: "GET",
    });
  }
  createData(data) {
    return axios({
      url: "https://65900a3fcbf74b575eca648d.mockapi.io/Products",
      method: "POST",
      data,
    });
  }
  getDataById(id) {
    return axios({
      url: `https://65900a3fcbf74b575eca648d.mockapi.io/Products/${id}`,
      method: "GET",
    });
  }
  deleteData(id) {
    return axios({
      url: `https://65900a3fcbf74b575eca648d.mockapi.io/Products/${id}`,
      method: "DELETE",
    });
  }
  updateData(id, data) {
    return axios({
      url: `https://65900a3fcbf74b575eca648d.mockapi.io/Products/${id}`,
      method: "PUT",
      data,
    });
  }
}
