import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./Management.css";
import Dropdown from 'react-bootstrap/Dropdown';

export default function ManagementTextContent() {
    
    const [contacts, setContacts] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getLoginStatus();
    }, []);

    const getData = async () => {
        const response = await fetch('api/pages/textall');
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
        getData();
    };

    const putData = async (id = -1, data = {}) => {
        data = JSON.stringify(data);
        const response = await fetch('api/pages/text&' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
        return response.json();
    }

    const postData = async (data = {}) => {
        data = JSON.stringify(data);
        const response = await fetch('api/pages/text', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
        return response.json();
    }

    const deleteData = async (id = -1) => {
        const response = await fetch('api/pages/text&' + id, {
            method: 'DELETE',
        })
        return response.json();
    }

    const [addFormData, setAddFormData] = useState({
        identifier: "",
        content: "",
        description: "",
    });

    const [editFormData, setEditFormData] = useState({
        identifier: "",
        content: "",
        description: "",
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
            identifier: addFormData.identifier,
            content: addFormData.content,
            description: addFormData.description,
        };

        const newContacts = [...contacts, newContact];

        const newContactPost = {
            identifier: addFormData.identifier,
            content: addFormData.content,
            description: addFormData.description,
        };
        postData(newContactPost);

        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            identifier: editFormData.identifier,
            content: editFormData.content,
            description: editFormData.description,
        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        putData(editContactId, editedContact);

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            identifier: contact.identifier,
            content: contact.content,
            description: contact.description,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        deleteData(contactId);

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
                    Texts
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="management/administrator">Administrators</Dropdown.Item>
                    <Dropdown.Item href="management/links">Links</Dropdown.Item>
                    <Dropdown.Item href="management/timeline">Timeline Activities</Dropdown.Item>
                    <Dropdown.Item href="management/upcoming-events">Upcoming Events</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Identifier</th>
                            <th>Content</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.id ? (
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
                    name="identifier"
                    required="required"
                    placeholder="Enter Identifier..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="content"
                    required="required"
                    placeholder="Enter Content..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="description"
                    required="required"
                    placeholder="Enter Description..."
                    onChange={handleAddFormChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.identifier}</td>
            <td>{contact.content}</td>
            <td>{contact.description}</td>
            <td>
                <button
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteClick(contact.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

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
                    placeholder="Enter Identifier..."
                    name="identifier"
                    value={editFormData.identifier}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter Content..."
                    name="content"
                    value={editFormData.content}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter Description..."
                    name="description"
                    value={editFormData.description}
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
