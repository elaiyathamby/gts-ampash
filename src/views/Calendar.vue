<template>
  <ion-item-group v-bind:key="task" v-for="task in tasks">
    <ion-item-divider>
      <ion-label>{{ task.date }}</ion-label>
    </ion-item-divider>

    <ion-item v-bind:key="todo" v-for="todo in task.todos">
      <ion-label>{{ todo }}</ion-label>
    </ion-item>
  </ion-item-group>
</template>
<script>
import { 
  IonItem, 
  IonItemDivider,
  IonItemGroup, 
  IonLabel
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonItem,
    IonItemDivider, 
    IonItemGroup, 
    IonLabel
  },
  data(){
      return{
          tasks: [
            {
              "date": "2021-06-05",
              "titel": "test"
            },
            {
              "date": "2021-06-05",
              "titel": "App"
            },
            {
              "date": "2021-06-08",
              "titel": "Springen"
            }
          ]
      }
  },
  mounted(){
    this.tasks = [...new Set(this.tasks.map(x => x.date))].map((k) => ({date:k,todos:this.tasks.filter(x => x.date == k).map(x => x.titel)}) );
  }
});
</script>