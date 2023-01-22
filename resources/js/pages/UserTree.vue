<template>
  <DefaultBackground />
  <main class="flex items-center flex-col gap-6 md:gap-12 mt-8">
    <header v-if="user" class="flex flex-col items-center" v-auto-animate>
      <UserImage
        class="mb-2"
        :image="user.image"
        size="h-14 w-14 md:h-24 md:w-24 "
      />
      <h1
        class="
          text-xl
          sm:text-3xl
          font-bold
          text-center
          dark:text-chiaro
          text-gray-800
        "
      >
        @{{ user.name }}
      </h1>
    </header>
    <section class="w-11/12 sm:w-2/3" v-auto-animate>
      <div class="flex justify-center" v-if="empty">
        {{ user.name }} has 0 link associated.
      </div>
      <div v-if="links">
        <ul>
          <li v-for="link in links" :key="link" class="flex justify-center">
            <a
              class="
                flex
                justify-center
                text-center
                gap-1
                text-base
                sm:text-lg
                py-6
                border
                dark:text-chiaro dark:border-chiaro
                text-gray-700
                border-gray-700
                shadow-xl
                rounded
                mb-4
                w-full
                md:w-3/4
                transition-all
                hover:scale-105
              "
              :href="link.link"
              target="_blank"
              @click="visitData(link.id, link.link)"
            >
              <p>{{ link.link_name }}</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <footer v-if="user" class="dark:text-chiaro text-gray-700">
      Powered By FreeTree
    </footer>
  </main>
</template>
<script setup>
import DefaultBackground from '../components/DefaultBackground.vue';
import UserImage from '../components/UserImage.vue';
import { useUserTree } from '../composables/userTree';

const visitData = (linkId, linkUrl) => {
  axios.post('/api/v1/visit/' + linkId, linkUrl);
};

const { user, links, empty } = useUserTree();
</script>

<style scoped></style>
