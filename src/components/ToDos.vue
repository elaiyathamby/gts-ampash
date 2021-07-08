<template>
  <ion-item-group v-bind:key="task" v-for="task in tasks">
    <ion-item-divider>
      <ion-label>{{ task.date }}</ion-label>
    </ion-item-divider>

    <ion-item
      button
      v-bind:router-link="'/tabs/calendar/' + todo.id"
      v-bind:key="todo"
      v-for="todo in task.todos"
    >
      <ion-label>{{ todo.title }}</ion-label>
    </ion-item>
  </ion-item-group>
</template>
<script>
import {
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name:"Todos",
  components: {
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonLabel,
  },
  props:{
    tasks: Array
  }
});
</script>