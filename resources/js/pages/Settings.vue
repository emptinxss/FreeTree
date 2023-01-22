<template>
  <content-layout title="Settings">
    <ErrorMsg class="mb-6" v-if="error" :msg="errorMsg" />
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
    <Layout
      title="Profile Information"
      description="Personal details and application"
    >
      <UserInfo
        type="text"
        title="Username"
        :data="user.name"
        :isEditing="isEditing"
        v-model:data="updatedName.name"
        @save-settings="saveSettings(updatedName)"
      />
      <UserInfo
        type="email"
        title="Email adress"
        :data="user.email"
        :isEditing="isEditing"
        v-model:data="updatedEmail.email"
        @save-settings="saveSettings(updatedEmail)"
      />
      <Token
        title="Token"
        :show="show"
        :hiddenToken="hiddenToken"
        @toggle-token="toggleToken"
      />
      <Image
        title="Profile image"
        :edit="edit"
        @upload-image="uploadImage"
        @image-file="imageFile($event)"
      />
      <Account title="Account" @delete-account="delUser" />
    </Layout>
  </content-layout>
</template>

<script setup>
import ContentLayout from '../layouts/ContentLayout.vue';
import ErrorMsg from '../components/ErrorMsg.vue';
import Modal from '../components/Modal.vue';
import Layout from '../components/settings/Layout.vue';
import UserInfo from '../components/UserInfo.vue';
import Token from '../components/settings/Token.vue';
import Image from '../components/settings/Image.vue';
import Account from '../components/settings/Account.vue';
import { useModal } from '../composables/modal';
import { useErrors } from '../composables/errors';
import { useEditUser } from '../composables/editUser.js';
import { useToken } from '../composables/token';
import { useUpload } from '../composables/upload';
import { useDeleteAccount } from '../composables/deleteAccount';

const { successModal, successMessage } = useModal();
const { error, errorMsg, showError } = useErrors();
const { token, show, hiddenToken, toggleToken } = useToken();
const { edit, saveImage, imageFile, uploadImage } = useUpload();
const { delUser } = useDeleteAccount();
const { user, isEditing, updatedName, updatedEmail, saveSettings } =
  useEditUser();
</script>
