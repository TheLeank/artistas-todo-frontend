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
					status: false,
					text: 'first task'
				},
				{
					id: 2,
					status: false,
					text: 'another task'
				}
			];

			context.commit('setTasks', sampleTasks);

			return sampleTasks;
		}
	}
});
