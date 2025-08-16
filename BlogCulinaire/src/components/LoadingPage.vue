<script setup lang="ts">

</script>

<template>
  <div class="loading-container">
    <div class="loader"></div>
    <p>Chargement...</p>
  </div>
</template>

<style scoped>

  .loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh; /* plein écran */
  }

  .loader {
    border: 8px solid #f3f3f3; /* couleur de fond */
    border-top: 8px solid #db6334; /* couleur du cercle */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite; /* rotation infinie */
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>