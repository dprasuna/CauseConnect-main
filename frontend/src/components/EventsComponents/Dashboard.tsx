import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import {
  FiEdit2,
  FiCalendar,
  FiUsers,
  FiCheckCircle,
  FiLogOut,
} from "react-icons/fi";

import { FaRegBell } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import VolunteerCertificateGenerator from "./certificateGen";
import axios from "axios";

interface User {
  username: string;
  email: string;
  role: "volunteer" | "organizer";
  registeredEvents: Event[];
  createdEvents: Event[];
}

interface Event {
  _id: string;
  title: string;
  date: string;
  status: string;
}

//Notification type
interface Notification {
  id: string;
  message: string;
  read: boolean;
  createdAt: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [registeredEvents, setRegisteredEvents] = useState<Event[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [openNotifications, setOpenNotifications] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Fetch user data from your API
    const fetchUserData = async () => {
      try {
        // Replace this with actual API call

        const userToken = await localStorage.getItem("token");
        let userId: string | null = null;
        if (userToken) {
          const decodedToken: any = jwtDecode(userToken);

          userId = decodedToken?.userId;
          setUserId(userId);
          const response = await fetch("https://causeconnect-main-1.onrender.com/api/users/curr", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${userToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId }),
          });
          const data = await response.json();
          setUser(data);

          console.log("user data", data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

 const fetchEvents = async () => {
  if (!userId) {
    console.error("User ID is not defined");
    return;
  }

  try {
    const [organizedEvents, volunteeredEvents] = await Promise.all([
      axios.get("https://causeconnect-main-1.onrender.com/api/events/organized", {
        withCredentials: true
      }),
      axios.get("https://causeconnect-main-1.onrender.com/api/events/volunteered", {
        withCredentials: true
      })
    ]);

    setEvents(organizedEvents.data.data);
    setRegisteredEvents(volunteeredEvents.data.data);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement update user API call
    setIsEditing(false);
  };

  const handleLogout = () => {
    // TODO: Implement logout logic  Clear local storage/cookies Redirect to login page
    localStorage.removeItem("token");
    navigate("/");
  };

  // to add a new notification automatically every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      addNotification();
    }, 10000); // Add new notification every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const addNotification = () => {
    const newNotification: Notification = {
      id: Date.now().toString(),
      message: "You have a new event notification!",
      read: false,
      createdAt: new Date().toISOString(),
    };

    // Function to add a new notification
    setNotifications((prev) => {
      // Add new notification and keep only the latest 5 notifications
      const updatedNotifications = [newNotification, ...prev];
      return updatedNotifications.slice(0, 5); // Limit to 5 notifications
    });
  };

  // Mark a notification as read
  const markAsRead = (notificationId: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
              <p className="text-gray-600">
                Welcome, {user?.username || "Guest"}
              </p>
            </div>
            <div className="flex gap-3">
              {user && (
                <>
                  <button
                    onClick={() => setOpenNotifications(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <FaRegBell className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <FiEdit2 className="w-4 h-4" />
                    {isEditing ? (
                      "Cancel"
                    ) : (
                      <p className="hidden lg:block">Edit Profile</p>
                    )}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    <FiLogOut className="w-4 h-4" />
                    <p className="hidden lg:block">Logout</p>
                  </button>
                </>
              )}
            </div>
          </div>

          {isEditing ? (
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stats Cards */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <FiCalendar className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Created Events</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {user?.createdEvents?.length || 0}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <FiUsers className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Registered Events</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {user?.registeredEvents?.length || 0}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <FiCheckCircle className="w-8 h-8 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Role</p>
                    <p className="text-2xl font-bold text-gray-900 capitalize">
                      {user?.role || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Events Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Created Events */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Created Events</h2>
            <div className="space-y-4">
              {user?.createdEvents?.length ? (
                user.createdEvents.map((event) => (
                  <div key={event._id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          event.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No events created yet</p>
              )}
            </div>
          </div>

          {/* Registered Events */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Registered Events</h2>
            <div className="space-y-4">
              {user?.registeredEvents?.length ? (
                user.registeredEvents.map((event) => (
                  <div key={event._id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          event.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No events registered yet</p>
              )}
            </div>
          </div>
        </div>

        <VolunteerCertificateGenerator />

        {openNotifications && (
          <div className="absolute top-[185px] right-10 w-64 bg-white shadow-lg rounded-lg p-4">
            <div className="flex flex-row items-center justify-between mx-2">
              <h3 className="text-lg font-semibold mb-2">Notifications</h3>

              <button
                onClick={() => setOpenNotifications(false)}
                className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <IoIosClose size={23} className="w-4 h-4" />
              </button>
            </div>
            <hr className="my-2" />
            <ul>
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-2 mb-2 rounded-lg ${
                    notification.read ? "bg-gray-100" : "bg-blue-50"
                  }`}
                >
                  <p>{notification.message}</p>
                  <small className="block text-gray-500">
                    {new Date(notification.createdAt).toLocaleString()}
                  </small>
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-blue-500 hover:underline mt-1"
                    >
                      Mark as Read
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
