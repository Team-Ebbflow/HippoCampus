import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./Management.css";
import Dropdown from 'react-bootstrap/Dropdown';

export default function ManagementAdministrator() {
    
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
        const response = await fetch('api/administrators/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
        return response.json();
    }

    const postAdministrator = async (data = {}) => {
        data = JSON.stringify(data);
        const response = await fetch('api/administrators', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
        return response.json();
    }

    const deleteAdministrator = async (id = -1) => {
        const response = await fetch('api/administrators/' + id, {
            method: 'DELETE',
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

        const newContactPost = {
            adminFirstName: addFormData.adminFirstName,
            adminLastName: addFormData.adminLastName,
            adminMobile: addFormData.adminMobile,
            adminEmail: addFormData.adminEmail,
            adminPassword: ""
        };
        postAdministrator(newContactPost);

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

        deleteAdministrator(contactId);

        setContacts(newContacts);
    };

    const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
        return (
            <tr>
                <td>{contact.adminFirstName}</td>
                <td>{contact.adminLastName}</td>
                <td>{contact.adminMobile}</td>
                <td>{contact.adminEmail}</td>
                <td>
                    <button
                        type="button"
                        onClick={(event) => handleEditClick(event, contact)}
                    >
                        Edit
                    </button>
                    <button type="button" onClick={() => handleDeleteClick(contact.adminId)}>
                        Delete
                    </button>
                </td>
            </tr>
        );
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
                    Administrators
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="management/links">Links</Dropdown.Item>
                    <Dropdown.Item href="management/texts">Texts</Dropdown.Item>
                    <Dropdown.Item href="management/timeline">Timeline Activities</Dropdown.Item>
                    <Dropdown.Item href="management/upcoming-events">Upcoming Events</Dropdown.Item>
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
                    placeholder="Enter first name..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="adminLastName"
                    required="required"
                    placeholder="Enter last name..."
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
            <h3>Default password: lastname+mobile</h3>
        </div>
    );
}

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter first name..."
                    name="adminFirstName"
                    value={editFormData.adminFirstName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter last name..."
                    name="adminLastName"
                    value={editFormData.adminLastName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a phone number..."
                    name="adminMobile"
                    value={editFormData.adminMobile}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="email"
                    required="required"
                    placeholder="Enter an email..."
                    name="adminEmail"
                    value={editFormData.adminEmail}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};