let baseUrl = "http://examination.24x7retail.com";
let apiUrl = `${baseUrl}/api/v1.0`

export default {
    fetchEmp: `${apiUrl}/Employees`,
    fetchDep: `${apiUrl}/`,
    getOneEmp: `${apiUrl}/Employee`,
    addEmp: `${apiUrl}/Employee`,
    updateEmp: `${apiUrl}/Employee`,
    deleteEmp: `${apiUrl}/Employee`,
    headerConfig: "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf"
}