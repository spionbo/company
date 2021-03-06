/**
 *  author : bo.peng
 *  createTime 2018-11-15 16:16
 *  description : 试例
 */
import lazyLoad from "../LazyLoad";
import react from "./react";
import vue from "./vue";
import webpack from "./webpack";
export default {
	path: 'example',
	name: '项目说明',
	component: lazyLoad(() => import(/* webpackChunkName: "example" */ '../../containers/example')),
	redirect:"/example/namingSpecification",
	children: [
		{
			name: "命名规范",
			path: "namingSpecification",
			component: lazyLoad(() => import(/* webpackChunkName: "example.namingSpecification" */ '../../containers/example/namingSpecification'))
		},
		{
			name: "项目结构",
			path: "projectStructure",
			component: lazyLoad(() => import(/* webpackChunkName: "example.projectStructure" */ '../../containers/example/projectStructure'))
		},
		{
			name: "公共文件级组件等",
			path: "public",
			component: lazyLoad(() => import(/* webpackChunkName: "example.flowChart" */ '../../containers/example/flowChart'))
		},
		{
			name: "项目流程图",
			path: "flowChart",
			component: lazyLoad(() => import(/* webpackChunkName: "example.flowChart" */ '../../containers/example/flowChart'))
		},
		{
			name: "单元测试",
			path: "flowChart",
			component: lazyLoad(() => import(/* webpackChunkName: "example.flowChart" */ '../../containers/example/flowChart'))
		},
		{
			name: "服务器部署",
			path: "flowChart",
			component: lazyLoad(() => import(/* webpackChunkName: "example.flowChart" */ '../../containers/example/flowChart'))
		},
		webpack,
		vue,
		react,
	]
}