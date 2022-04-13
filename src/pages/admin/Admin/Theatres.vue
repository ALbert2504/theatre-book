<template>
  <div class="theatres">
    <app-wrapper>
      <div class="theatres-content">
        <div class="theatres__headline">
          <h2 class="theatres__title">Theatres configs</h2>
          <base-button btnType="secondary" @click="handleToggleCreateModal(true)">
            Create
          </base-button>
        </div>
      </div>
    </app-wrapper>
    <transition name="global">
      <base-modal
          v-if="isCreateModalOpen"
          @on-cancel="handleToggleCreateModal(false)"
          @on-submit="handleSubmit"
      >
        <input
          type="text"
          class="base-input"
          placeholder="Theatre name"
          v-model="theatreName"
        >
        <input
            type="text"
            class="base-input"
            placeholder="Image URL"
            v-model="theatreImageUrl"
        >
        <input
            type="datetime-local"
            class="base-input"
            placeholder="Date"
            v-model="theatreDate"
        >
      </base-modal>
    </transition>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
import theatreService from "@/services/theatre.service";

// Models
import Theatre from "@/models/Theatre.model";

export default defineComponent({
  name: 'Theatres',
  data() {
    return {
      isCreateModalOpen: false,
      theatreName: '',
      theatreImageUrl: '',
      theatreDate: '',
    };
  },
  methods: {
    handleToggleCreateModal(bool: boolean) {
      this.isCreateModalOpen = bool;
    },
    handleSubmit() {
      console.log(this.theatreDate, 'ddd');
      const date = moment(this.theatreDate).toISOString();
      const theatre = new Theatre(this.theatreName, this.theatreImageUrl, date);
      // theatreService.createTheatre(theatre);
      console.log(theatre);
    }
  }
});
</script>

<style scoped>
.theatres__headline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.theatres__title {
  color: var(--secondary);
}
.base-input:not(:last-child) {
  margin-bottom: 8px;
}
</style>