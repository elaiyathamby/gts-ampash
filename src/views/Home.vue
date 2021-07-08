<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Getting Things Done</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-button router-link="/tabs/form">Neue Aufgabe</ion-button>
      </div>

<ion-grid>
<ion-row>
<ion-col>Deine Koordinaten</ion-col>
<ion-col>Lat: {{ latitude }}</ion-col>
<ion-col>Long: {{ longitude }}</ion-col>
</ion-row>

<ion-row>
<ion-col>Fotogalerie</ion-col>
</ion-row>

<ion-button @click="save" expand="block">Speichern</ion-button>

</ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Geolocation } from "@capacitor/geolocation";

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  },
  data() {
    return {
      latitude: 0,
      longitude: 0,
      first: "",
    };
  },
  async mounted() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log(coordinates);
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
    }
});


 

</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>