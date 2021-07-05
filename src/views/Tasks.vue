<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Tasks</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tasks</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-list>
          <ion-item v-bind:key="task" v-for="task in tasks">{{ task }}</ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem
  },
  data(){
      return{
          tasks: []
      }
  },
  mounted(){
      this.getTasks();
  },
  methods: {
      async getTasks(){
          const config = {
              headers: {
                  'Content-Type': 'application/json',
                  'x-apikey': '5b2e750b0c346a20d90a5dda'
              }
          };
            const answ = await axios.get('https://tasks-0039.restdb.io/rest/tasks',config);
            this.tasks = answ.data;
      }
  }
});
</script>