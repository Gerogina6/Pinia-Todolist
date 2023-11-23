<template>
    <li>
        {{ item.context }}
        <button @click="todoStore.removeItem(item)">remove</button>
    </li>
</template>

<script setup lang="ts">
import { Item, useTodoStore } from '../stores/index'

defineProps<{item: Item}>()

const todoStore = useTodoStore()
</script>

<style lang="sass" scoped>

</style>