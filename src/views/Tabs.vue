<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/tabs/home">
            <ion-icon :icon="home" />
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Kalender" href="/tabs/calendar">
            <ion-icon :icon="calendar"></ion-icon>
            <ion-label>Kalender</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="today" href="/tabs/today">
            <ion-icon :icon="alert" > </ion-icon>
            <ion-label>Tasks Heute</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="form" href="/tabs/form">
            <ion-icon :icon="add"> </ion-icon>
            <ion-label>Neue Aufgabe</ion-label>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet
} from '@ionic/vue';
import { ellipse, square, triangle, home, calendar, alert, add } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: {
    IonContent,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet
  },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
      home,
      calendar,
      alert,
      add
    }
  }
}
</script>