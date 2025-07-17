<template>
  <div class="chat-container">
    <h1 class="page-title">Coming Soon!</h1>
    <p class="coming-soon-message">This feature is currently under development. Please check back later!</p>
  </div>
</template>

<script setup>
// Script for chat functionality will be added here
</script>

<style scoped>
.chat-container {
  padding: 24px;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 64px; /* To clear the fixed header */
  text-align: center; /* Center content */
}

.page-title {
  font-size: 32px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 32px;
  color: rgba(0, 0, 0, 0.85);
}

.coming-soon-message {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.65);
}

@media (max-width: 768px) {
  .chat-container {
    padding: 16px;
    padding-top: 70px; /* Adjust for mobile fixed header */
  }

  .page-title {
    font-size: 24px;
    margin-top: 16px;
    margin-bottom: 24px;
  }
}
</style> 