<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" :invalid="!checked" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import ToggleSwitch from '@/volt/ToggleSwitch.vue';
import { ref } from 'vue';

const checked = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" :invalid="!checked" />
    </div>
</template>

<script setup lang="ts">
import ToggleSwitch from '@/volt/ToggleSwitch.vue';
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`);
</script>
