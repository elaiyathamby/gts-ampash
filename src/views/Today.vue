<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Tasks bis <i style="color:red">Heute</i> fällig</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <todos v-bind:tasks="orderedTodo"></todos>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
} from "@ionic/vue";
import { defineComponent } from "vue";
import Todos from "@/components/ToDos.vue";
import { useTodos } from "@/composables/useTodos";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    Todos,
  },
  setup() {
    const { orderedTodo, getTodayTodos } = useTodos();
    return { orderedTodo, getTodayTodos };
  },
  mounted() {
    this.getTodayTodos();
  },
});
</script>