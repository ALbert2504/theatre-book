import { GetterTree } from 'vuex';

// Types
import { IRootState } from '@/store/types';
import { ITheatreState } from '@/store/modules/theatres/types';

const theatreGetters: GetterTree<ITheatreState, IRootState> = {
  theatres(state) {
    return state.theatres;
  },
};

export default theatreGetters;