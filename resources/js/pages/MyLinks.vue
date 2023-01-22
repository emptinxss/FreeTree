<template>
  <content-layout title="My Links">
    <Modal
      v-if="successModal"
      :toast="true"
      toastIcon="success"
      :toastTitle="successMessage"
      :timer="3000"
      timerProgressBar="true"
      position="top"
      :showConfirmButton="false"
      :customClass="{
        popup: 'width-toast',
      }"
    />
    <ErrorMsg v-if="error" :msg="errorMsg" />
    <table-layout>
      <ColumnName />
      <tbody
        class="block md:table-row-group"
        v-for="(links, index) in link"
        :key="index"
      >
        <tr class="block md:table-row text-scuro dark:text-chiaro">
          <Name
            :data="links.link_name"
            :index="index"
            :edit="edit"
            v-model:name="updateLink.link_name"
            @save-settings="saveSettingLink(links.id, updateLink)"
          />
          <Link
            :data="links.link"
            :index="index"
            :edit="edit"
            v-model:url="updateLink.link"
            @save-settings="saveSettingLink(links.id, updateLink)"
          />
          <Visit :data="links.visits_count" />
          <LastVisit :data="links.latest_visit" />
          <Actions
            :edit="edit"
            :index="index"
            @save-settings="saveSettingLink(links.id, updateLink)"
            @get-link-data="getlinkData(links, index)"
            @del-link="delLink(links.id)"
          />
        </tr>
      </tbody>
    </table-layout>
    <AddLink />
    <SetPublicUser />
  </content-layout>
</template>

<script setup>
import ContentLayout from '../layouts/ContentLayout.vue';
import Modal from '../components/Modal.vue';
import ErrorMsg from '../components/ErrorMsg.vue';
import TableLayout from '../components/links/table/TableLayout.vue';
import ColumnName from '../components/links/table/ColumnName.vue';
import Name from '../components/links/table/Name.vue';
import Link from '../components/links/table/Link.vue';
import Visit from '../components/links/table/Visit.vue';
import LastVisit from '../components/links/table/LastVisit.vue';
import Actions from '../components/links/table/Actions.vue';
import AddLink from '../components/links/AddLink.vue';
import SetPublicUser from '../components/SetPublicUser.vue';

import { useGetLinks } from '../composables/getLinks';
import { useEditLinks } from '../composables/editLinks';
import { useErrors } from '../composables/errors';
import { useModal } from '../composables/modal';

const { error, errorMsg } = useErrors();
const { successMessage, successModal } = useModal();
const { edit, updateLink, getlinkData, saveSettingLink, delLink } =
  useEditLinks();
const { link } = useGetLinks();
</script>

<style></style>
