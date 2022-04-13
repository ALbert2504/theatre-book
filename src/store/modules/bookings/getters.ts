import { GetterTree } from 'vuex';

import { IRootState } from '@/store/types';
import { IBookingState } from '@/store/modules/bookings/types';

const bookingsGetters: GetterTree<IBookingState, IRootState> = {
  bookings(state) {
    return state.bookings;
  },
  myBookings(state) {
    return state.myBookings;
  },
};

export default bookingsGetters;