<template>
    <div>
        <h1></h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

const post = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchPost = async () => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        post.value = data
    }
    catch {
        error.value = err.message
    }
    finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchPost()
})
</script>