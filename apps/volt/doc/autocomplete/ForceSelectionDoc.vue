<template>
    <DocSectionText v-bind="$attrs">
        <p>
            ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions. Simply enable
            <i>forceSelection</i> to enforce that input is always from the suggestion list.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" forceSelection optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import AutoComplete from '@/volt/AutoComplete.vue';
import { onMounted, ref } from 'vue';
import { CountryService } from '~/service/CountryService';

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();

const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
};

const code = ref(`
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" forceSelection optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
</template>

<script setup lang="ts">
import AutoComplete from '@/volt/AutoComplete.vue';
import { ref, onMounted } from "vue";
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();

const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}
<\/script>
`);
</script>
