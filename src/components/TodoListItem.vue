<template>
	<div class="todo-list-item">
		<template v-if="!editing">
			<el-checkbox v-model="task.completed" class="task-status-toggle">
				{{ task.text }}
			</el-checkbox>

			<el-button @click="deleteTask" type="text" class="task-action-button">
				<i class="el-icon-delete"></i>
			</el-button>

			<el-button @click="editTask" type="text" class="task-action-button">
				<i class="el-icon-edit"></i>
			</el-button>
		</template>
		<div v-else class="input-wrapper">
			<el-input v-model="newTaskText" placeholder="Todo content..."></el-input>
			<el-button @click="updateTask" type="primary">
				Update
			</el-button>
			<el-button @click="cancelEditing" type="info">
				Cancel
			</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TodoListItem',
		props: {
			task: Object
		},
		data() {
			return {
				editing: false,
				newTaskText: ''
			};
		},
		watch: {
			task: {
				handler(newVal) {
					this.$emit('set-completed-status', newVal.id, newVal.completed);
				},
				deep: true
			}
		},
		methods: {
			editTask() {
				this.newTaskText = this.task.text;
				this.editing = true;
			},
			cancelEditing() {
				this.editing = false;
			},
			deleteTask() {
				this.$emit('delete-task', this.task.id);
			},
			updateTask() {
				this.$emit('update-task', this.task.id, this.newTaskText);
				this.editing = false;
			}
		}
	};
</script>

<style lang="scss">
	.todo-list-item {
		padding: 20px;

		& + .todo-list-item {
			border-top: solid 1px #c2cfe5;
		}

		.task-status-toggle {
			.el-checkbox__label {
				color: #000000;
			}
		}

		.input-wrapper {
			display: flex;

			button {
				margin-left: 20px;
			}

			button + button {
				margin-left: 10px;
			}
		}

		.task-action-button {
			display: none;
			margin-left: 10px;
			float: right;
			padding: 0;

			i {
				font-weight: bold;
				font-size: 20px;
			}
		}

		&:hover {
			background-color: #dee6f1;

			.task-action-button {
				display: block;
			}
		}
	}

</style>
