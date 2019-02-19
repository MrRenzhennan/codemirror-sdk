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
	id: 'editor-box', //容器id   必须
	isPaste: false,//是否禁用粘贴功能
	currentMode: 'html/css/js',//默认语言
	disabledForSelect: false,//是否禁用语言切换
	button: [//底部按钮
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
//编辑器默认内容
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
//底部按钮 事件 注册
Online_Programming.EventForButton(
	[
		{
			text: '点击运行',
			callback: function () {
				console.log('点击运行');
				//获取编辑器内容
				let val = Online_Programming.GetEditorVal();
				console.log(val)
				//展示区 显示
				Online_Programming.RequestStyleSetVal(val)
			}
		},
		{
			text: '重置编码',
			callback: function () {
				console.log('重置编码');
				Online_Programming.ResetContent();//重置编码
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
			}
		}
	]
)

```
