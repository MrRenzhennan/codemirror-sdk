# Online-Programming
基于CodeMirror 封装 在线编程

## Browser
```
IE9 + 
```
## Use
```node
npm install Online-Programming --save  
or
yarn add Online-Programming

```

## start
```node
yarn install
yarn start
```

## Options
```js
var Online_Programming = new OnlineProgramming({
	id: 'editor-box', //容器ID
	isPaste: false,//是否 禁用粘贴
	currentMode: 'html/css/js',//编辑器 默认 表现形势
	disabledForSelect: false,//是否禁用 select -->是否可以切换 编辑器模式
	disabledForInput: true,//是否禁用 input  -->是否 可以 允许 用户 增加 外部链接
	externalLink: { //支持外部链接
		'js': [
			{
				name: 'vue',
				version: '2.0',
				link: 'https://cdn.bootcss.com/vue/2.6.4/vue.js'
			},
			{
				name: 'react',
				version: '16.04',
				link: 'https://cdn.staticfile.org/react/16.4.0/umd/react.development.js'
			},
			{
				name: 'react-dom',
				version: '16.04',
				link: 'https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js'
			},
			{
				name: 'jquery',
				version: '3.3.1',
				link: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js'
			},
			{
				name: 'bootstrap',
				version: '3.0.0',
				link: 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js'
			}
		],
		'css': [
			{
				name: 'bootstrap',
				version: '3.0.0',
				link: 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css'
			}
		]
	},
	button: [ //底部按钮表现形势
		{
			text: '点击运行',
			style: 'background: #ff0000'
		},
		{
			text: '重置编码',
			style: 'background: #ff6600'
		}
	]
});
//编辑器 模式内容
Online_Programming.SetEditorVal(
	[
		{
			key: 'html',
			val: '<div>123</div>'
		},
		{
			key: 'css',
			val: 'html{color:#fff;}'
		},
		{
			key: 'js',
			val: 'console.log("123")'
		}
	]
)
//编辑器 底部 按钮事件注册
Online_Programming.EventForButton(
	[
		{
			text: '点击运行', //这里text 要与上面传入的button text一致
			callback: function () {
				console.log('点击运行');
				let val = Online_Programming.GetEditorVal(); //获取编辑器内容
				console.log(val)
				Online_Programming.RequestStyleSetVal(val) //展示区 展示   注意：不要改变val 的数据格式
			}
		},
		{
			text: '重置编码',
			callback: function () {
				console.log('重置编码');
				Online_Programming.ResetContent(); //重置代码

				Online_Programming.SetEditorVal(  //重置后 是否要显示 默认值
					[
						{
							key: 'html',
							val: '<div>123</div>'
						},
						{
							key: 'css',
							val: 'html{color:#fff;}'
						},
						{
							key: 'js',
							val: 'console.log("123")'
						}
					]
				)
			}
		}
	]
)


console.log(Online_Programming)

```
