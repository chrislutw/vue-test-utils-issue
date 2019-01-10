<template>
  <button v-if="visible" @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data: () => ({
    clicked: false,
    visible: false
  }),
  methods: {
    handleClick() {
      this.clicked = true;
    }
  }
};
</script>
