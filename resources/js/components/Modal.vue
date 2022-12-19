<template>
    <button v-if="defaultModal" :class="styleModalButton" @click="showalert()">
        {{ textOpenModal }}
    </button>
</template>

<script setup>
import swal from "sweetalert2";

const props = defineProps({
    styleModalButton: String,
    textOpenModal: String,
    toast: false,
    defaultModal: false,
    title: String,
    text: String,
    icon: String,
    toastIcon: String,
    toastTitle: String,
    timer: Number,
    position: String,
    iconColor: undefined,
    timerProgressBar: false,
    showCancelButton: Boolean,
    showConfirmButton: Boolean,
    confirmButtonText: String,
    buttonsStyling: false,
    customClass: Object,
    isConfirmed: undefined,
});

if (props.toast) {
    const Toast = swal.mixin({
        toast: true,
        position: props.position,
        showConfirmButton: props.showConfirmButton,
        timer: props.timer,
        timerProgressBar: props.timerProgressBar,
        customClass: props.customClass,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
        },
    });

    Toast.fire({
        icon: props.toastIcon,
        title: props.toastTitle,
    });
}

function showalert() {
    swal.fire({
        title: props.title,
        text: props.text,
        icon: props.icon,
        iconColor: props.iconColor,
        showCancelButton: props.showCancelButton,
        confirmButtonText: props.confirmButtonText,
        buttonsStyling: props.buttonsStyling,
        customClass: props.customClass,
    }).then((result) => {
        if (result.isConfirmed) {
            props.isConfirmed();
        }
    });
}
</script>

<style>
.swal2-popup {
    font-size: 1rem !important;
}

@media (max-width: 640px) {
    .swal2-popup {
        font-size: 0.6rem !important;
    }
    .width-toast {
        width: 200px !important;
    }
}
</style>
