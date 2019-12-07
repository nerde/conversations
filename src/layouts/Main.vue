<template>
  <div class="row">
    <div class="col-2">
      <ul>
        <li><v-link href="/">Inboxes</v-link></li>
        <li><v-link href="/workflows">Workflows</v-link></li>
        <li><v-link href="/analytics">Analytics</v-link></li>
        <li><v-link href="/settings">Settings</v-link></li>
      </ul>
    </div>
    <div class="col-10"><slot></slot></div>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style lang="scss">
</style>
