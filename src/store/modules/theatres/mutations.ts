import { MutationTree } from 'vuex';

// Types
import { ITheatreState, Theatre } from '@/store/modules/theatres/types';

const theatreMutations: MutationTree<ITheatreState> = {
  setTheatres(state, payload: Theatre[]) {
    state.theatres = payload;
  },
};

export default theatreMutations;