import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tasks: []
	},
	mutations: {
		setTasks(state, tasks) {
			state.tasks = tasks;
		},
		addTask(state, task) {
			state.tasks.push(task);
		},
		deleteTask(state, id) {
			state.tasks = state.tasks.filter((task) => {
				return task.id !== id;
			});
		},
		updateTask(state, newTask) {
			state.tasks = state.tasks.map((task) => {
				if (task.id === newTask.id) {
					return newTask;
				}

				return task;
			});
		}
	},
	actions: {
		async getTasks(context) {
			const sampleTasks = [
				{
					id: 1,
					completed: false,
					text: 'first task'
				},
				{
					id: 2,
					completed: true,
					text: 'another task'
				}
			];

			return new Promise((resolve) => {
				setTimeout(() => {
					context.commit('setTasks', sampleTasks);
					resolve(sampleTasks);
				}, 1500);
			});
		},
		async addTask(context, text) {
			return new Promise((resolve) => {
				setTimeout(() => {
					const createdTask = {
						id: new Date().getTime(),
						completed: false,
						text
					};

					context.commit('addTask', createdTask);
					resolve(createdTask);
				}, 200);
			});
		},
		async updateTask(context, task) {
			return new Promise((resolve) => {
				setTimeout(() => {
					context.commit('updateTask', task);
					resolve(task);
				}, 200);
			});
		},
		async deleteTask(context, id) {
			return new Promise((resolve) => {
				setTimeout(() => {
					context.commit('deleteTask', id);
					resolve();
				}, 200);
			});
		}
	}
});
