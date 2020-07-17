<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-8 col-sm-12 mx-auto bg-color-ecru-white pt-4 px-0 books-list">
        <form class="d-flex align-items-center mb-4 px-4">
          <label class="flex-grow-1 mb-0 mr-2">
            <input placeholder="search" type="text" class="form-control">
          </label>
          <button type="submit" class="btn btn-primary text-white">Search</button>
        </form>
        <h1 class="text-primary text-center pb-2">Top books of all time</h1>
        <div v-for="i in books">{{i}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    components: {
    },
    data: () => ({
      books: [1, 2, 3]
    })
  })
</script>

<style>

</style>
