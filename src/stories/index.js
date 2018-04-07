import { storiesOf } from "@storybook/vue";
import VueInfoAddon from "storybook-addon-vue-info";

import Button from "../components/Button.vue";

storiesOf("Buttons", module)
  .addDecorator(VueInfoAddon)
  .add("primary", () => ({
    components: { Button },
    template: `<Button text="sample button"/>`
  }));
