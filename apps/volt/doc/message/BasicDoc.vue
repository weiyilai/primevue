<template>
    <DocSectionText v-bind="$attrs">
        <p>Message component requires a content to display.</p>
    </DocSectionText>
    <div class="card">
        <Message>Message Content</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Message from '@/volt/Message.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <Message>Message Content</Message>
    </div>
</template>

<script setup lang="ts">
import Message from '@/volt/Message.vue';
<\/script>
`);
</script>
