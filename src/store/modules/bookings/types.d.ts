export type Booking = {
  _id: string;
  theatreId: string;
  userId: string;
  userEmail: string;
  userName: string;
  createdAt: string;
};

interface IBookingState {
  bookings: Booking[];
  myBookings: Booking[];
}