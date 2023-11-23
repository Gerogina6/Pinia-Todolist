import { defineStore } from "pinia"
import { ref,reactive, computed } from 'vue'

export type Item = {
    id: number,
    context: string,
}

let id = 1
const generateId = () => id++

export const useTodoStore = defineStore('todo', () => {
    const newItem = ref('')
    const items = reactive<Item[]>([])
    const itemCount = computed(() => items.length)

    function addItem(){
        items.push({
            id: generateId(),
            context: newItem.value
        })
        //清空输入框
        newItem.value = ''
    }

    function removeItem(item: Item) {
        const index = items.indexOf(item)
        items.splice(index, 1)
    }

    return {
        itemCount,
        newItem,
        items,
        addItem,
        removeItem,
    }
})