<style>

</style>

<template>
    <div class="secretcode">
        <Header/>
        <Content />
    </div>
</template>
  
<script>
import Header from './Navigation/Header.vue';
import Content from './SecretCode/Content.vue';
export default {
    components: {
    Content,
    Header
}
}
</script>