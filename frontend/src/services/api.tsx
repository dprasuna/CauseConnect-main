// src/services/api.ts
import axios from 'axios';

interface RegisterResponse {
  success: boolean;
  message: string;
}

export const registerForEvent = async (eventId: string, userToken: string): Promise<RegisterResponse> => {
    try {
        const response = await axios.post<RegisterResponse>(
            '/api/events/register',  // Replace with your actual backend API endpoint
            { eventId },
            {
                headers: {
                    Authorization: `Bearer ${userToken}`,  // Include user token for authentication
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error registering for event:', error);
        throw error;
    }
};
