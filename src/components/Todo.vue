<template>
    <input type="text" v-model="todoStore.newItem">
    <button @click="todoStore.addItem">add</button>

    <ul v-for="item in todoStore.items" :key="item.id">
        <todo-item :item="item"></todo-item>
    </ul>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores'
import TodoItem from '../components/TodoItem.vue' 

const todoStore = useTodoStore()
</script>

<style lang="sass" scoped>

</style>