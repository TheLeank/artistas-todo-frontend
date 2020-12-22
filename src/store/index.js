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
		}
	}
});
