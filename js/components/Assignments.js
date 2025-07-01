import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList,
    AssignmentCreate
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
      assignments: [
        { name: "Finish project", complete: false, id: 1, tag: 'math' },
        { name: "Read chapter 4", complete: false, id: 2, tag: 'science' },
        { name: "Turn in homework", complete: false, id: 3, tag: 'math' },
      ],
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
  methods: {
    add(newAssignment) {
      const assignment = {
        name: newAssignment,
        complete: false,
        id: this.assignments.length + 1,
      };
      this.assignments.push(assignment);
    }
  },
};
