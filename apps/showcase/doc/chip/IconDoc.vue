<template>
    <DocSectionText v-bind="$attrs">
        <p>A font icon next to the label can be displayed with the <i>icon</i> property.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="pi pi-apple" />
        <Chip label="Facebook" icon="pi pi-facebook" />
        <Chip label="Google" icon="pi pi-google" />
        <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        <Chip label="GitHub" icon="pi pi-github" removable>
            <template #removeicon="{ removeCallback, keydownCallback }">
                <i class="pi pi-minus-circle" @click="removeCallback" @keydown="keydownCallback" />
            </template>
        </Chip>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Chip label="Apple" icon="pi pi-apple" />
<Chip label="Facebook" icon="pi pi-facebook" />
<Chip label="Google" icon="pi pi-google" />
<Chip label="Microsoft" icon="pi pi-microsoft" removable />
<Chip label="GitHub" icon="pi pi-github" removable>
    <template #removeicon="{ removeCallback, keydownCallback }">
        <i class="pi pi-minus-circle" @click="removeCallback" @keydown="keydownCallback" />
    </template>
</Chip>
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="pi pi-apple" />
        <Chip label="Facebook" icon="pi pi-facebook" />
        <Chip label="Google" icon="pi pi-google" />
        <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        <Chip label="GitHub" icon="pi pi-github" removable>
            <template #removeicon="{ removeCallback, keydownCallback }">
                <i class="pi pi-minus-circle" @click="removeCallback" @keydown="keydownCallback" />
            </template>
        </Chip>
    </div>
</template>
<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="pi pi-apple" />
        <Chip label="Facebook" icon="pi pi-facebook" />
        <Chip label="Google" icon="pi pi-google" />
        <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        <Chip label="GitHub" icon="pi pi-github" removable>
            <template #removeicon="{ removeCallback, keydownCallback }">
                <i class="pi pi-minus-circle" @click="removeCallback" @keydown="keydownCallback" />
            </template>
        </Chip>
    </div>
</template>
<script setup>

<\/script>
`
            }
        };
    }
};
</script>
