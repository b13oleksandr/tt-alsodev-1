<template>
  <div v-if="modelValue" class="modal">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3
          class="modal-title"
          v-text="title"
        />
        <button
          class="close"
          @click="onClose"
        >
          &times;
        </button>
      </div>
      
      <div class="modal-body">
        <slot />
      </div>

      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:model-value'])

defineProps<{
  modelValue: boolean
  title: string
}>()

const onClose = () => {
  emit('update:model-value', false)
}
</script>
