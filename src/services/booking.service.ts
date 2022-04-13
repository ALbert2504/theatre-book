import { useToast } from 'vue-toastification';

// Utils
import request from "@/utils/request";

// Types and Models
import { Booking } from '@/models';
import { IBookingData } from '@/services/types/bookingTypes';
import { Booking as BookingType } from '@/store/modules/bookings/types';

const toast = useToast();

class BookingService {
  async createBooking(bookingData: Booking): Promise<BookingType | void> {
    try {
      const response = await request<IBookingData, Booking>('POST','bookings/create', bookingData);

      if (!response?.data?.success) {
        throw new Error('Something went wrong.');
      }

      const { data } = response;

      toast.success(data.message, {
        timeout: 2000,
      });

      return data.data.booking;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new BookingService();