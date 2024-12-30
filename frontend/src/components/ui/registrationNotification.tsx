import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerForEvent } from '../../services/api';  // Import the function

const EventRegistration: React.FC = () => {
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
    const userToken: string | null = localStorage.getItem('jwt');  // Assuming you're storing the JWT token in localStorage

    const showEmailSentToast = () => {
        toast.success("Confirmation email sent!", {
            position: "top-right",
            autoClose: 5000,  // Toast will disappear after 5 seconds
            hideProgressBar: true,
            closeOnClick: true,
        });
    };

    const handleEventRegistration = async () => {
        const eventId: string = '12345';  // Replace with the actual event ID you want to register for
        try {
            if (userToken) {
                const response = await registerForEvent(eventId, userToken);  // Call the registerForEvent function
                if (response.success) {
                    setIsEmailSent(true);
                    showEmailSentToast();  // Show toast notification
                }
            } else {
                console.log('User is not authenticated.');
            }
        } catch (error) {
            console.error('Error registering for event:', error);
        }
    };

    return (
        <div>
            <button onClick={handleEventRegistration}>Register for Event</button>
            {isEmailSent && <p>Email confirmation sent!</p>}
            <ToastContainer />  {/* This is where the toast will show */}
        </div>
    );
};

export default EventRegistration;
