import { useEffect } from "react";
import UserItem from "../../components/useritem/UserItem";
import { Tabs } from "antd";//the antd package provides the functionality for the tabs
import "./admin.css";
import { useUsercontext } from "../../hooks/useUsercontext";
import { useBookingContext } from "../../hooks/useBookingContext";
import BookingItem from "../../components/bookingitem/BookingItem";

const Admin = () => {
  //the admin page has tabs that contain the users and the bookings made by the users
  return (
    <Tabs defaultActiveKey="1" className="tabContainer">
      <Tabs.TabPane tab="Users" key="1" className="tab">
        <Users />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Bookings" key="2" className="tab">
        <Bookings />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Admin;

//the users available in the database are fetched using useEffect and are displayed using the UserItem component
export const Users = () => {
  const { users, dispatch } = useUsercontext();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();

      if (!response.ok) {
        console.log(json.error);
      }

      if (response.ok) {
        dispatch({ type: "GET_USERS", payload: json });
      }
    };
    getUsers();
  }, [dispatch]);

  return (
    <div className="userContainer">
      {users.map((user) => (
        <UserItem key={user._id} user={user} />
      ))}
    </div>
  );
};

//the bookings available in the database are fetched using useEffect and are displayed using the BookingItem component
export const Bookings = () => {
  const { bookings, dispatch } = useBookingContext();

  useEffect(() => {
    const getBookings = async () => {
      const response = await fetch("/api/bookings");
      const json = await response.json();

      if (!response.ok) {
        console.log(json.error);
      }

      if (response.ok) {
        dispatch({ type: "GET_BOOKINGS", payload: json });
      }
    };
    getBookings();
  }, [dispatch]);

  return (
    <div className="bookingContainer">
      {bookings.map((booking) => (
        <BookingItem booking={booking} key={booking._id} />
      ))}
    </div>
  );
};
