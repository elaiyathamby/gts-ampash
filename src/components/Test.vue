<template>
  <p>Hello, my name is {{ first }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['first'],
})
</script>


<style>

</style>