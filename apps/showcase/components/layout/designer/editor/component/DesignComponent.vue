<template>
    <section>
        <div class="text-lg font-semibold capitalize mb-2">{{ componentKey }}</div>
        <Fieldset legend="Common" :toggleable="true" class="mb-3">
            <div class="flex flex-col gap-3">
                <template v-if="hasCommonTokens">
                    <template v-for="(value, name) in tokens" :key="name">
                        <DesignComponentSection v-if="name !== 'colorScheme' && name !== 'css'" :componentKey="componentKey" :path="name" />
                    </template>
                </template>
                <span v-else class="block py-3">There are no design tokens</span>
            </div>
        </Fieldset>
        <Fieldset legend="Color Scheme" :toggleable="true">
            <Tabs v-if="hasColorScheme" :value="activeColorScheme" @update:value="onColorSchemeChange">
                <TabList>
                    <Tab value="cs-0">Light</Tab>
                    <Tab value="cs-1">Dark</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="cs-0">
                        <div class="flex flex-col gap-3">
                            <DesignComponentSection v-for="(value, name) in lightTokens" :key="name" :componentKey="componentKey" :path="'colorScheme.light.' + name" />
                        </div>
                    </TabPanel>
                    <TabPanel value="cs-1">
                        <div class="flex flex-col gap-3">
                            <DesignComponentSection v-for="(value, name) in darkTokens" :key="name" :componentKey="componentKey" :path="'colorScheme.dark.' + name" />
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <span v-else class="block py-3">There are no design tokens defined per color scheme.</span>
        </Fieldset>
    </section>
</template>

<script>
import EventBus from '@/app/AppEventBus';

export default {
    methods: {
        onColorSchemeChange() {
            EventBus.emit('dark-mode-toggle', { dark: !this.$appState.darkTheme });
        }
    },
    computed: {
        componentKey() {
            return this.$route.name;
        },
        tokens() {
            return this.$appState.designer.theme.preset.components[this.componentKey];
        },
        lightTokens() {
            return this.tokens.colorScheme?.light;
        },
        darkTokens() {
            return this.tokens.colorScheme?.dark;
        },
        hasColorScheme() {
            return this.tokens.colorScheme != undefined;
        },
        hasCommonTokens() {
            return (
                Object.keys(this.tokens).filter((name) => {
                    return name !== 'colorScheme' && name !== 'css';
                }).length > 0
            );
        },
        activeColorScheme() {
            return this.$appState.darkTheme ? 'cs-1' : 'cs-0';
        }
    }
};
</script>
