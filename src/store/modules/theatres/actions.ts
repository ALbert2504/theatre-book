import { ActionTree } from 'vuex';

// Types
import { IRootState } from '@/store/types';
import { ITheatreState, Theatre } from '@/store/modules/theatres/types';

// Services
import theatreService from "@/services/theatre.service";

const theatresActions: ActionTree<ITheatreState, IRootState> = {
  async getTheatres({ commit }) {
    try {
      const receivedData = await theatreService.getTheatres<Theatre>();

      commit('setTheatres', receivedData);
      console.log(receivedData, 'receivedData');
    } catch (e) {
      console.log(e);
    }
  },
};

export default theatresActions;