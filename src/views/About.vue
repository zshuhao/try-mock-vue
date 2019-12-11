<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="handleTestGet">测试 get</button>
        <button @click="handleTestPost">测试 post</button>
    </div>
</template>

<script>
import { testGet, testPost } from '../api/test'
export default {
    name: 'About',
    methods: {
        handleTestGet () {
            testGet()
        },
        handleTestPost () {
            testPost()
        }
    }
}
</script>
