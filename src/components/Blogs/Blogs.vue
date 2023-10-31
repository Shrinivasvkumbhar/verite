<style>
@import url("./blogs.css");

.hidden {
    visibility: hidden;
}
</style>

<template>
    <div class="section-blogs">
        <ul id="messages">
            <li v-for="(blog, index) in data.blogs" :key="index">
                <div class="infos">
                    <img :src="blog.image" alt=""  />
                </div>
                <div class="content">
                    <div class="author">
                        {{blog.author}}
                        <!-- <b>ceo &amp; founder "depot webdesigner"</b> -->
                    </div>
                    <div class="paragraph">
                        <p v-if="!blog.showReadMore">{{ truncateText(blog.content, 25) }}</p>
                        <span @click="toggleReadMore(index)" :class="{hidden: blog.showReadMore}">
                        Read more
                        </span>
                        <p v-if="blog.showReadMore">{{ blog.content }}</p>
                        <span @click="toggleReadMore(index)" :class="{hidden: !blog.showReadMore}">
                        Read less
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import data from "../../utils/data.json";

export default {
    data() {
        return {
            data: data,
        };
    },
    methods: {
        truncateText(text, limit) {
      // Truncate the text to the specified word limit
      const words = text.split(" ");
      if (words.length > limit) {
        return words.slice(0, limit).join(" ");
      } else {
        return text;
      }
    },
    toggleReadMore(index) {
      // Toggle the "Read More" state for a specific blog
      this.data.blogs[index].showReadMore = !this.data.blogs[index].showReadMore;
    },
  }
}

</script>