<template>
    <DxTextArea
        label="Country"
        :value="longText"
        :min-height="50"
        :max-height="300"
        :auto-resize-enabled="true"
        :max-length="500"
        value-change-event="keyup"
        @value-changed="onValueChanged"
    />
</template>

<script>
import 'devextreme/dist/css/dx.light.css';
import { DxTextArea } from 'devextreme-vue/text-area';
import notify from "devextreme/ui/notify";

export default {
    components: {
        DxTextArea
    },
    data() {
        return {
            longText: "Japan is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest. The Greater Tokyo Area is the most populous metropolitan area in the world."
        };
    },
    methods: {
        onValueChanged() {
            notify("The value has been changed");
        }
    }
}
</script>