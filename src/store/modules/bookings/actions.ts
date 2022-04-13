import { ActionTree } from 'vuex';

// Types
import { IBookingState } from '@/store/modules/bookings/types';
import { IRootState } from '@/store/types';
import { Booking as BookingModel } from "@/models";

// Services
import bookingService from '@/services/booking.service';

const bookingsActions: ActionTree<IBookingState, IRootState> = {
  async createBooking({ commit }, data: BookingModel) {
    try {
      const receivedData = bookingService.createBooking(data);

      if (!receivedData) {
        throw new Error('Something went wrong.');
      }

      commit('createBooking', receivedData);
    } catch (e) {
      console.log(e);
    }
  }
};

export default bookingsActions;