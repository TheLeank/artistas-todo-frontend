<template>
	<div class="home">
		<v-container
			class="fill-height pa-0 mt-0 mt-sm-3"
			fluid
		>
			<v-row
				align="center"
				justify="center"
			>
				<v-col
					cols="12"
					sm="10"
					md="8"
					class="todo-list"
				>
					<h2>Artistas Todo Frontend</h2>
					<img alt="Vue logo" src="../assets/logo.png" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'Home'
	};
</script>

<style scoped lang="scss">
	.home {
		.todo-list {
			text-align: center;
			border: solid 1px gray;
		}
	}
</style>
