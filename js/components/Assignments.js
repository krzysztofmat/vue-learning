import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList,
    AssignmentCreate,
  },
  template: `
  <section class="space-y-6">
    <assignment-list title="In progress" :assignments="filters.inProgress"></assignment-list>
    <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>

    <assignment-create @add="add"/>
  </section>    
    `,

  data() {
    return {
      assignments: [],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },

  created() {
    fetch("http://localhost:3001/assignments")
      .then(response => response.json())
      .then(data => (this.assignments = data));
  },

  methods: {
    add(newAssignment) {
      const assignment = {
        name: newAssignment,
        complete: false,
        id: this.assignments.length + 1,
      };
      this.assignments.push(assignment);
    },
  },
};
