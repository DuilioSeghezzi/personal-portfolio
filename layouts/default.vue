<script setup lang="ts">

</script>

<template>
    <div class="w-screen h-screen flex flex-col">
        <UiNavbar />
        <div class="w-full h-full overflow-auto">
            <slot/>
        </div>
    </div>
</template>