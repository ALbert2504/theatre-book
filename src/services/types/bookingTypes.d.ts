import { Booking } from "@/store/modules/bookings/types";

export interface IBookingData {
  success: boolean;
  data: {
    booking: Booking;
  };
  message: string;
}