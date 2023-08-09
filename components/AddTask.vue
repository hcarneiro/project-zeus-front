<template>
  <div class="slide-overlay-wrapper">
    <slide-panel-header :title="title" @closeProfilePanel="onClose"></slide-panel-header>
    <div class="slide-overlay-body">
      Hello
    </div>
  </div>
</template>

<script>
import SlidePanelHeader from '~/components/SlidePanelHeader.vue'

export default {
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    SlidePanelHeader
  },
  methods: {
    onClose(options) {
      this.$emit('closePanel', options);
    }
  }
}
</script>