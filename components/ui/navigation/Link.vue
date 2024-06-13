<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
    },
    routeName: {
        type: String,
        required: true,
    }
});

function gotoRoute(){
    const router = useRouter();
    router.push({name: props.routeName});
}
</script>

<template>
    <li class="cursor-pointer select-none text-SandyBrown font-bold" @click="gotoRoute">{{ text }}</li>
</template>