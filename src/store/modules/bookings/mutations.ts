import { MutationTree } from 'vuex';

// Types
import { IBookingState, Booking } from '@/store/modules/bookings/types';

const bookingsMutations: MutationTree<IBookingState> = {
  createBooking(state, payload: Booking) {
    state.myBookings.push(payload);
  },
};

export default bookingsMutations;