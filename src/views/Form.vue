

<template>
  <!-- Default Input -->
<h2> Aufgabenerfassung</h2>

  <ion-input></ion-input>

  <!-- Input with value -->

  <!-- Input with placeholder -->
  <ion-item>
    <ion-label position="floating">Titel</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <!-- Input with clear button when there is a value -->

  <ion-item>
    <ion-label position="floating">Beschreibung</ion-label>
    <ion-textarea></ion-textarea>
  </ion-item>



          <ion-item>
          <ion-label>Kategorie</ion-label>
          <ion-select interface="popover">
            <ion-select-option value="pri">Privat</ion-select-option>
            <ion-select-option value="biz">Business</ion-select-option>
            <ion-select-option value="oth">Others</ion-select-option>
          </ion-select>
        </ion-item>

<ion-item>
  <ion-label>Fälligkeitsdatum </ion-label>
  <ion-datetime display-format="D MMM YYYY" min="2021" max="2040" value="2005-06-17"></ion-datetime>
</ion-item>


 <ion-button expand="block">Speichern</ion-button>




<!-- speichern
-->

</template>

<script>
import { IonLabel, IonInput, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonLabel, IonInput, IonItem }


  
});
</script>