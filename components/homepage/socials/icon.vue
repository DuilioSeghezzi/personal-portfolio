<script setup lang="ts">
const props = defineProps({
    url:{
        type: String,
        required: true,
    },
    iconUrl:{
        type: String,
        required: true,
    },
});
</script>

<template>
    <li>
        <img :src="props.iconUrl" class="w-5 h-5">
    </li>
</template>