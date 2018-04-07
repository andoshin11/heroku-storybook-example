<template>
  <button :class="[type, size, state]" :type="nativeType" :disabled="state === 'disabled'" class="Button" @click="handleClick" >
    <div class="Button__Text">{{ text }}</div>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md"
    },
    state: {
      type: String,
      default: "normal"
    },
    nativeType: {
      type: String,
      default: "button"
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.Button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 4px;
}

.Button[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}

.Button.md {
  min-width: 152px;
  height: 32px;
  padding: 0 8px;
  font-size: 1.4rem;
}

.Button.primary {
  background: #00578d;
}

.Button.danger {
  background: #ea352d;
}
</style>
