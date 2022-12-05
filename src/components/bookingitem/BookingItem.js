//by importing the booking context I can use the context values in this module i.e. bookings and dispatch
import { useBookingContext } from "../../hooks/useBookingContext";
import "./bookingitem.css";

const BookingItem = ({ booking }) => {
  const { dispatch } = useBookingContext();
  //the dispatch function is used to update the contextual state

  //the cancelBooking function removes a booking from the database
  const cancelBooking = async (id) => {
    const response = await fetch(
      "https://hotel-api-rx2n.onrender.com/api/bookings/" + id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }

    if (response.ok) {
      dispatch({ type: "DELETE_BOOKING", payload: json });
    }
  };

  return (
    <div className="booking-item">
      <p>
        <b>Hotel-name:</b> {booking.hotel}
      </p>
      <p>
        <b>Client:</b> {booking.username}
      </p>
      <p>
        <b>Stay duration:</b> {booking.totalDays} days
      </p>
      <p>
        <b>Amount due:</b> R{booking.totalAmount}
      </p>
      <div className="btnContainer">
        <button
          className="cancelBtn"
          onClick={() => cancelBooking(booking._id)}
        >
          Cancel booking
        </button>
      </div>
    </div>
  );
};

export default BookingItem;
