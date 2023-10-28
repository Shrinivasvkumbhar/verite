<template>
    <div class="head-card sm:w-full mb-12">
       <div class="img-container sm:!h-1/2">
         <img :src="image" alt="Sooper-11" srcset="">
       </div>
        <h3 class="flex items-center sm:!text-2xl">{{heading}} <span class="new-marker sm:!p-x-2">NEW</span></h3>
        <p class="paper-desc sm:text-xl">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default{
    props:['image','heading','description']
}
</script>