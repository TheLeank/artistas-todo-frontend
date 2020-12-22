<template>
	<el-row type="flex" justify="center">
		<el-col :xs="24" :md="18">

			<!-- TODO: add loading indicator -->

			<div class="todo-list">
				<div class="input-wrapper">
					<el-input v-model="taskText" placeholder="Todo content..."></el-input>
					<el-button @click="addTask" type="primary">Add</el-button>
				</div>
				<div class="tasks-list">
					<template v-if="tasks && tasks.length > 0">
						<TodoListItem
							v-for="task in tasks"
							:key="task.id"
							:task="task"
							@set-completed-status="setCompletedStatus"
							@delete-task="deleteTask"
						/>
					</template>
					<div v-else class="no-tasks-message">
						No items
					</div>
				</div>
			</div>

		</el-col>
	</el-row>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	import TodoListItem from '../components/TodoListItem';

	export default {
		name: 'Home',
		components: {
			TodoListItem
		},
		data() {
			return {
				loading: true,
				taskText: ''
			};
		},
		computed: {
			...mapState([
				'tasks'
			])
		},
		async created() {
			await this.getTasks();
			this.loading = false;
		},
		methods: {
			...mapActions([
				'getTasks'
			]),
			addTask() {
				/* TODO: implement
				this.$store.dispatch('addTask', this.taskText);
				this.taskText = '';
				*/
			},
			setCompletedStatus(id, completed) {
				/* TODO: implement
				this.$store.dispatch('setCompletedStatus', {
					id,
					completed
				});
				*/
			},
			deleteTask(id) {
				// TODO: implement
				// this.$store.dispatch('deleteTask', id);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.todo-list {
		$border: solid 1px #c2cfe5;
		border: $border;
		border-radius: 4px;
		background-color: #ffffff;

		.input-wrapper {
			display: flex;
			padding: 20px;
			border-bottom: $border;

			button {
				margin-left: 20px;
			}
		}

		.no-tasks-message {
			text-align: center;
			padding: 20px;
			color: #909399;
		}
	}
</style>
