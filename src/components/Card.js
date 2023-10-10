import { useState } from "react";
import moment from 'moment';
import Button from "./Button";

const Card = ({ onEdit, onDelete, employee }) => {
    let {
        empNo, empName, basicSalary, dateOfBirth, dateOfJoin, departmentName,
        empAddressLine1, empAddressLine2, empAddressLine3, isActive} = employee;
    const [isFront, setIsFront] = useState(true);
    return (
        <div className="card">
            <div className={`card_content ${!isFront ? 'viewDetails' : ''}`}>
                <div className="card_front">
                    <h3 className="d-flex justify-between">
                        <span>{ empNo }</span>
                        {isActive ? (<img src="/img/active.png" alt="active" title="active" />) : (<img src="/img/in-active.png" alt="inactive" title="inactive" />) }
                    </h3>
                    <p className="card_username"><b>{ empName }</b></p>
                    <p>Joined On</p>
                    <p><b>{ moment(dateOfJoin).format("MM-DD-YYYY") }</b></p>
                    <div className="card_btns d-flex align-center justify-end">
                        <Button btnClasses="btn_icon" title="View Employee" onClick={() => setIsFront(false)}>
                            <img src="/img/eye-black.png" alt="View employee" title="View an employee" className="icon" />
                        </Button>
                        <Button btnClasses="btn_icon" title="Edit Employee" onClick={() => onEdit({type: "edit", employee})}>
                            <img src="/img/edit-black.png" alt="Edit employee" title="Edit an employee" className="icon" />
                        </Button>
                        <Button btnClasses="btn_icon" title="Delete Employee" onClick={() => onDelete(employee.empNo)}>
                            <img src="/img/delete-black.png" alt="Delete employee" className="icon" />
                        </Button>
                    </div>
                </div>
                <div className="card_back">
                    <h3 className="go-back" onClick={() => setIsFront(true)}>
                        <img src="/img/back-black.png" alt="Go back to front view" title="go back to front view" className="icon" />
                        Back
                    </h3>
                    <div className="card_backDetails">
                        <div className="card_backLeft">
                            <p><b>#</b>{ empNo }</p>
                            <p><b>Name: </b>{ empName }</p>
                            <p><b>Address: </b>{ `${empAddressLine1}, ${empAddressLine2}, ${empAddressLine3}` }</p>
                            <p><b>Basic: </b>{ basicSalary }</p>
                        </div>
                        <div className="card_backRight">
                            <p><b>Joined On: </b>{ moment(dateOfJoin).format("MM-DD-YYYY") }</p>
                            <p><b>Born On: </b>{ moment(dateOfBirth).format("MM-DD-YYYY") }</p>
                            <p><b>Department: </b>{ departmentName }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;