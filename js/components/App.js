import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  components: {
    Assignments,
    Panel,
  },

  template: `
    <div class="grid gap-6">
      <assignments></assignments>

      <panel>
        <template v-slot:default>
          This i my default content
        </template>
        <template #heading>
          This is my heading
        </template>

      </panel>

      <panel>
        This is my second default content
      </panel>
      
      <panel>
        This is my third heading

        <template v-slot:footer>
          What are you doing down here?
        </template>
      </panel>
      
      <panel theme="light">
        <template #heading>
          This is light heading
        </template>

        This is my light content

        <template v-slot:footer>
          This is my light footer
        </template>
      </panel>      
    </div>
  `,
};
