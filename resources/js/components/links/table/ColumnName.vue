<template>
  <thead class="block md:table-header-group">
    <tr
      class="
        block
        md:table-row
        absolute
        -top-full
        md:top-auto
        -left-full
        md:left-auto md:relative
        text-scuro
        dark:text-chiaro
        bg-white
        dark:bg-scuro
      "
    >
      <th
        v-for="item in columnName"
        :key="item"
        class="
          px-6
          py-3
          text-xs
          font-bold
          text-left
          uppercase
          md:table-cell
          last-of-type:text-right
        "
      >
        {{ item }}
      </th>
    </tr>
  </thead>
</template>

<script setup>
const columnName = ['Name', 'Link', 'Visit', 'Last Visit', 'Actions'];
</script>

