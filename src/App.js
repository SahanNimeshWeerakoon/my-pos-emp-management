import { useState, useEffect } from "react";
import axios from 'axios';
import Button from './components/Button';
import Card from './components/Card';
import Modal from './components/Modal';
import Search from './components/Search'
import config from './config';
import dummyData from './config/data';
import './App.scss';

function App() {
  const [searchText, setSearchText] = useState("");
  const [employees, setEmployees] = useState(dummyData.dummyUsers);
  const [filteredEmployees, setFilteredEmployees] = useState(dummyData.dummyUsers);
  const [departments, setDepartments] = useState(dummyData.dummyDepartments);
  const [selectedEmp, setSelectedEmp] = useState({});
  const [modal, setModal] = useState({ show: false, type: "" });

  // fetch employees and departments
  useEffect(() => {
    let headerConfig = {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Length': '<calculated when request is sent>',
        'Host': '<calculated when request is sent>',
        'User-Agent': 'PostmanRuntime/7.26.8',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Apitoken': config.headerConfig
      }
    }
    const fetchEmp = async () => {
      const allEmp = await axios.get(config.fetchEmp, config);
      const allDep = await axios.get(config.fetchDep, config);
    }
    // fetchEmp();
  }, []);
  
  // filter employees with search text
  useEffect(() => {
    const searchEmployees = async () => {
      let filteredEmp = await employees.filter(emp => {
        return Object.values(emp).indexOf(searchText) > -1;
      });
      if(searchText) {
        setFilteredEmployees(filteredEmp);
      } else {
        setFilteredEmployees(employees);
      }
    }
    searchEmployees();
  }, [searchText]);

  const handleBtnClick = (e) => {
  }
  // on edit icon clicked on the card
  const handleEdit = ({employee, type}) => {
    setSelectedEmp(employee);
    setModal({ type: type, show: true })
  }
  // on delete icon clicked on the card
  const handleDelete = (id) => {
    setSelectedEmp({ id })
  }
  // create employee
  const handleSubmit = (e) => {
  }

  // Close modal
  const closeModal = () => {
    setModal({ type: "", show: false })
  }
  
  return (
    <div className="App">
      <div className='create-btn-container d-flex justify-end'>
        <Button btnClasses="btn--create" title="Create New Employee" onClick={() => {setModal({ type: "create", show: true })}}>Create</Button>
      </div>
      <Search onEmployeeSearch={e => setSearchText(e)} />
      {/* <Button btnClasses="btn--edit" title="Edit Employee" onClick={handleBtnClick}>Edit</Button><br /><br />
      <Button btnClasses="btn--delete" title="Delete Employee" onClick={handleBtnClick}>Delete</Button><br /><br /> */}
      <div className="d-flex justify-around wrap">
        { filteredEmployees.map(emp => {
          let employeeDepartment = departments.filter(dep => {
            return dep.departmentCode === emp.departmentCode
          });
          emp.departmentName = employeeDepartment.length ? employeeDepartment[0].departmentName : "";
          return (
            <Card onEdit={handleEdit} onDelete={handleDelete} employee={emp} key={emp.empNo} />
          );
        }) }
      </div>
      <Modal
        type={modal.type}
        show={modal.show}
        employee={selectedEmp}
        departments={departments}
        handleSubmit={handleSubmit}
        closeModal={closeModal} />
    </div>
  );
}

export default App;
