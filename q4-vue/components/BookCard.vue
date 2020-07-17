<template>
  <div>
    Name: {{ fullName }}
    Message: {{ message }}
  </div>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import { BookComment } from '../../q4/src/app/core/models/book-comment';


  interface Book {
    author: string;
    cover: string;
    rating: number;
    slug: string;
    synopsis: string;
    title: string;
    upvoted: boolean;
    upvotes: number;
    comments: BookComment[];
  }

  export default Vue.extend({
    name: 'YourComponent',
    data() {
      return {
        message: 'This is a message'
      }
    },

    computed: {
    }
  })

</script>
