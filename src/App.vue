<template>
	<div>
		<el-container>
			<div class="app-title">Artistas Todo Frontend</div>

			<el-header height="auto">
				<div class="main-menu">
					<router-link to="/">
						<i class="el-icon-s-order"></i>
						Tasks
					</router-link>
					<router-link to="/about">
						<i class="el-icon-info"></i>
						About
					</router-link>
				</div>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'App'
	};
</script>

<style lang="scss">
	body, html {
		height: 100%;
		padding: 0;
		margin: 0;
		background-color: #f4f6fa;
		font-family: 'Arial';
	}

	.app-title {
		padding: 20px;
		font-size: 22px;
		font-weight: bold;
		text-align: center;
	}

	.main-menu {
		padding: 25px;
		background-color: #ffffff;
		border: solid 1px #c2cfe5;

		a {
			color: #409EFF;
			font-weight: bold;
			text-decoration: none;
			transition: 500ms;

			&:hover, &:active, &:focus {
				color: darken(#409EFF, 10%);
			}

			+ a {
				margin-left: 20px;
			}
		}
	}
</style>
