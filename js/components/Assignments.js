import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList,
  },
  template: `
  <section class="space-y-6">
    <assignment-list title="In progress" :assignments="filters.inProgress"></assignment-list>
    <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>

    <form @submit.prevent="add">
        <div class="border border-gray-600 text-black">    
            <input v-model="newAssignment" placeholder="New assignment..." class="p-2"/>
            <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
    </form>
  </section>    
    `,
  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1 },
        { name: "Read chapter 4", complete: false, id: 2 },
        { name: "Turn in homework", complete: false, id: 3 },
      ],
      newAssignment: "",
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
    add() {
      const assignment = {
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1,
      };
      this.assignments.push(assignment);
      this.newAssignment = "";
    },
  },
};
