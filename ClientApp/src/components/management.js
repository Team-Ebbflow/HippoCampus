import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./Management.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Management() {
    
    const [contacts, setContacts] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getLoginStatus();
    }, []);

    const getAdministrators = async () => {
        const response = await fetch('api/administrators');
        const data = await response.json();
        setContacts(data);
        setLoading(false);
    };

    const getLoginStatus = async () => {
        const response = await fetch('api/administrators/login_status');
        const data = await response.json();
        if (data.toString() != 'true')
        {
            window.location.href = 'login';
            return;
        }
        getAdministrators();
    };

    const putAdministrator = async (id = -1, data = {}) => {
        data = JSON.stringify(data);
        console.log(id);
        console.log(data);
        const response = await fetch('api/administrators/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
        return response.json();
    }

    const [addFormData, setAddFormData] = useState({
        adminFirstName: "",
        adminLastName: "",
        adminMobile: "",
        adminEmail: "",
    });

    const [editFormData, setEditFormData] = useState({
        adminFirstName: "",
        adminLastName: "",
        adminMobile: "",
        adminEmail: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            adminFirstName: addFormData.adminFirstName,
            adminLastName: addFormData.adminLastName,
            adminMobile: addFormData.adminMobile,
            adminEmail: addFormData.adminEmail,
        };

        const newContacts = [...contacts, newContact];

        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            adminFirstName: editFormData.adminFirstName,
            adminLastName: editFormData.adminLastName,
            adminMobile: editFormData.adminMobile,
            adminEmail: editFormData.adminEmail,
        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.adminId === editContactId);

        newContacts[index] = editedContact;

        const editedContactPut = {
            adminId: editContactId,
            adminFirstName: editFormData.adminFirstName,
            adminLastName: editFormData.adminLastName,
            adminMobile: editFormData.adminMobile,
            adminEmail: editFormData.adminEmail,
            adminPassword: ""
        };
        putAdministrator(editContactId, editedContactPut);

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.adminId);

        const formValues = {
            adminFirstName: contact.adminFirstName,
            adminLastName: contact.adminLastName,
            adminMobile: contact.adminMobile,
            adminEmail: contact.adminEmail,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.adminId === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    if (isLoading) {
        return (
            <div>
                <h1> Loading Data... </h1>
            </div>
        )
    }
    return (
        <div className="app-container">
            <Dropdown style={{ marginBottom: 30, marginTop: 30 }}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" size="lg">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.adminId ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        contact={contact}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>

            <h2>Add an entry</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="adminFirstName"
                    required="required"
                    placeholder="Enter a name..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="adminLastName"
                    required="required"
                    placeholder="Enter an address..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="adminMobile"
                    required="required"
                    placeholder="Enter a phone number..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="email"
                    name="adminEmail"
                    required="required"
                    placeholder="Enter an email..."
                    onChange={handleAddFormChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}