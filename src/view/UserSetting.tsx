import { useState } from "react";
import './UserSettings.css';


export default function UserSettings() {
    const defaultAvaterURL = "https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png"
    const [name, setName] = useState('name');
    const [email, setEmail] = useState('email@email.mail');
    const [isEditing, setIsEditing] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    };

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    };


    function handleEditClick() {
        setIsEditing(!isEditing);
    };

    function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
        /*
        not implemented yet
         */
    };

    return (
        <div className="user-settings">
            <h1>User Settings</h1>
            <div className="avatar-container" onMouseEnter={() => setIsButtonVisible(true)} onMouseLeave={() => setIsButtonVisible(false)}>
                <div className="avatar">
                    <img width={90} src={defaultAvaterURL} alt="Avatar" />
                </div>
                <label htmlFor="image-upload" className={`floating-button ${isButtonVisible ? 'visible' : ''}`}>
                    Upload Image
                </label>
                <input type="file" accept="image/*" id="image-upload" onChange={handleAvatarChange} style={{ display: 'none' }} />
            </div>
            {isEditing ? (
                <form onSubmit={handleEditClick}>
                    <p>
                        <strong>
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </strong>
                    </p>
                    <p>
                        <strong>
                            <label htmlFor="email">Email: </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </strong>
                    </p>
                </form>
            ) : (
                <div>
                    <p><strong>Name: </strong> {name}</p>
                    <p><strong>Email: </strong> {email}</p>
                </div>
            )}
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </div>
    );
}