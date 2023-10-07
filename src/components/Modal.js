import { useState } from 'react';
import Button from './Button';

const Modal = function({ type="", show, handleSubmit, closeModal }) {
    const [emp, setEmp] = useState({
        empNo: "",
        empName: "",
        empAddressLine1: "",
        empAddressLine2: "",
        empAddressLine3: "",
        departmentCode: "",
        dateOfJoin: new Date(),
        dateOfBirth: new Date(),
        basicSalary: 0,
        isActive: false
    });

    const handleChange = e => {
        setEmp(emp => {
            return {
                ...emp,
                [e.target.name]: e.target.value
            }

        });
    }

    return (
        <div className={`modal ${show ? "" : "d-none"}`}>
            <div className="modal_overlay"></div>
            <div className="modal_content">
                <img src="/img/close-black.png" alt="close modal" title="close modal" className='modal_closeIcon' onClick={closeModal} />
                <h1>{ type.charAt(0).toUpperCase() + type.slice(1) } An Employee</h1>
                <div className='form-container'>
                    <div className="form-group">
                        <label form="empNo">Employee Number</label>
                        <input type="text" id='empNo' name='empNo' value={emp.empNo} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label form="empName">Employee Name</label>
                        <input type="text" id='empName' name='empName' value={emp.empNo} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label form="empAddressLine1">Employee Address 1</label>
                        <input type="text" id='empAddressLine1' name='empAddressLine1' value={emp.empAddressLine1} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label form="empAddressLine2">Employee Address 2</label>
                        <input type="text" id='empAddressLine2' name='empAddressLine2' value={emp.empAddressLine2} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label form="empAddressLine3">Employee Address 3</label>
                        <input type="text" id='empAddressLine3' name='empAddressLine3' value={emp.empAddressLine3} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label form="departmentCode">Departmenet</label>
                        <input type="text" id='departmentCode' name='departmentCode' value={emp.departmentCode} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label form="dateOfJoin">Date Of Join</label>
                        <input type="date" id='dateOfJoin' name='dateOfJoin' value={emp.dateOfJoin} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label form="dateOfBirth">Date Of Birth</label>
                        <input type="date" id='dateOfBirth' name='dateOfBirth' value={emp.dateOfBirth} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label form="basicSalary">Basic Salary</label>
                        <input type="number" id='basicSalary' name='basicSalary' value={emp.basicSalary} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label form="isActive">Is Active</label>
                        <input type="text" id='isActive' name='isActive' value={emp.isActive} onChange={handleChange} />
                    </div>
                </div>
                <Button
                    btnClasses={`btn--${type}`}
                    title="Create New Employee"
                    onClick={() => {
                        handleSubmit();
                        closeModal();
                    }}
                >{type.toUpperCase()}</Button>
            </div>
        </div>
    );
}

export default Modal;