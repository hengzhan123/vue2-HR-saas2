<template>
    <el-image :src="src" class="img-container">
        <template #error>
            <img src="./img/head.jpg" alt="">
        </template>
    </el-image>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" scoped>
.img-continer {
    border-radius: 50%;

    img {
        width: 100%;
    }
}
</style>