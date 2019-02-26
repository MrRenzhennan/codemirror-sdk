import '@babel/polyfill';

import * as CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import './font/iconfont.css';
import './index.scss';

// mode -->语法高亮
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/vbscript/vbscript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/sass/sass';
import 'codemirror/mode/xml/xml';
// import 'codemirror/mode/vue/vue';
import 'codemirror/mode/python/python';
// import 'codemirror/mode/php/php';
// import 'codemirror/mode/sql/sql';
import 'codemirror/mode/clike/clike'; // java c c++ c#

// 自动补全
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/sql-hint';
import 'codemirror/addon/hint/html-hint';
import 'codemirror/addon/hint/xml-hint';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/css-hint';
import 'codemirror/addon/hint/show-hint';
//theme
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/isotope.css';
//scrollbarStyle
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/addon/scroll/simplescrollbars';
//代码折叠
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/xml-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
//选中行高亮
import 'codemirror/addon/selection/active-line';

//错误检查
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/lint/css-lint';

//标签匹配
import 'codemirror/addon/edit/matchtags.js';
//自动闭合标签
import 'codemirror/addon/edit/closetag.js';
//括号匹配
import 'codemirror/addon/edit/matchbrackets.js';
//自动闭合括号
import 'codemirror/addon/edit/closebrackets.js';

/**
		 	Ctrl-F / Cmd-F
			开始搜索
			Ctrl-G / Cmd-G
			找下一个
			Shift-Ctrl-G / Shift-Cmd-G
			找到上一个
			Shift-Ctrl-F / Cmd-Option-F
			更换
			Shift-Ctrl-R / Shift-Cmd-Option-F
			全部替换
			ALT-G
			跳到线上
		*/
//搜索
import 'codemirror/addon/search/search.js';
import 'codemirror/addon/search/searchcursor.js';
//跳转到指定行
import 'codemirror/addon/search/jump-to-line.js';
//搜索框美化
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';

//注释
import 'codemirror/addon/comment/continuecomment.js';
import 'codemirror/addon/comment/comment.js';

// 默认值提示placeholder
import 'codemirror/addon/display/placeholder.js';

//全屏
import 'codemirror/addon/display/fullscreen.css';
import 'codemirror/addon/display/fullscreen.js';

//标记选中 所有匹配高亮 滚动条显示位置
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/match-highlighter.js';

import Sortable from 'sortablejs';

class Unit {
	constructor() { }

	//生成随机字符串
	// GetRandomCode(length = 32) {
	//     if (length > 0) {
	//         let data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	//         let nums = "";
	//         for (let i = 0; i < length; i++) {
	//             let r = parseInt(Math.random() * 61);
	//             nums += data[r];
	//         }
	//         return nums;
	//     } else {
	//         return false;
	//     }
	// };

	/**
	 * 设备类型判断
	 */
	GetBrowserInfo() {
		const version = {
			isAndroid() {
				return navigator.userAgent.toLowerCase().indexOf('android') !== -1;
			},

			isIOS() {
				return (
					/iPhone/i.test(navigator.userAgent) ||
					/iPad/i.test(navigator.userAgent) ||
					/iPod/i.test(navigator.userAgent)
				);
			},

			isWindows() {
				return navigator.platform.toLowerCase().indexOf('win') !== -1;
			},

			isMac() {
				return navigator.platform.toLowerCase().indexOf('mac') !== -1;
			},

			isLinux() {
				return navigator.platform.toLowerCase().indexOf('linux') !== -1;
			},

			isMobileBrowser() {
				return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			},
			isWeChat() {
				return /MicroMessenger/i.test(navigator.userAgent);
			},

			isChrome() {
				return /Chrome/i.test(navigator.userAgent);
			},

			isFirefox() {
				return /Firefox/i.test(navigator.userAgent);
			},

			isSafari() {
				return /Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent);
			},

			isIE() {
				return navigator.userAgent.indexOf('MSIE') !== -1 || /Trident.*rv[ :]*11\./.test(navigator.userAgent);
			},

			isIE7() {
				return navigator.userAgent.indexOf('MSIE 7.') !== -1;
			},

			isIE8() {
				return navigator.userAgent.indexOf('MSIE 8.') !== -1;
			},

			isIE9() {
				return navigator.userAgent.indexOf('MSIE 9.') !== -1;
			},

			isIE10() {
				return navigator.userAgent.indexOf('MSIE 10.') !== -1;
			},

			isIE11() {
				return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
			}
		};
		return version;
	}

	/**
	 * 数据类型检测
	 * 
	 */
	DataTypeDetection() {
		const detection = {
			//object
			isObject(o) {
				return Object.prototype.toString.call(o) == '[object Object]';
			},
			//Array
			isArray(o) {
				return Object.prototype.toString.call(o) == '[object Array]';
			},
			//Null
			isNULL(o) {
				return Object.prototype.toString.call(o) == '[object Null]';
			},
			//dom
			isDocument(o) {
				//let _r = (Object.prototype.toString.call(o) == "[object Document]") || (Object.prototype.toString.call(o) == "[object HTMLDocument]")
				let _r;
				//在Chrome,Opera中HTMLElement的类型为function
				if (typeof HTMLElement === 'object') {
					//instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性
					_r = o instanceof HTMLElement;
				} else {
					_r = o && typeof o === 'object' && o.nodeType === 1 && typeof o.nodeName === 'string';
				}
				return _r;
			},
			//String
			isString(o) {
				return Object.prototype.toString.call(o) == '[object String]';
			},
			//Number
			isNumber(o) {
				return Object.prototype.toString.call(o) == '[object Number]';
			},
			//Boolean
			isBoolean(o) {
				return Object.prototype.toString.call(o) == '[object Boolean]';
			},
			//Undefined
			isUndefined(o) {
				return Object.prototype.toString.call(o) == '[object Undefined]';
			},
			//Function
			isFunction(o) {
				return Object.prototype.toString.call(o) == '[object Function]';
			}
		};

		return detection;
	}

	/**
	 * 动态生成 script 引入外部链接
	 * @param {*} _src 
	 * @param {*} callback 
	 */
	LoadScripts(_src, callback = function () { }) {
		//添加script属性，并添加到head中
		let script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = _src;
		//script加载成功
		script.onload = () => {
			script.onload = null;
			script.onerror = null;
			if (this.DataTypeDetection().isFunction(callback)) {
				callback({
					message: _src + '依赖加载成功！'
				});
			}
		};
		script.onerror = () => {
			script.onload = null;
			script.onerror = null;
			if (this.DataTypeDetection().isFunction(callback)) {
				callback({
					message: _src + '依赖未加载成功！'
				});
			}
		};
		let head = document.getElementsByTagName('head')[0];
		(head || document.body).appendChild(script);
	}

	/**
	 * 获取dom 宽高
	 * @param {dom元素} Element _dom 
	 */
	DomGetWH(_dom = '') {
		let dom = _dom;
		if (dom && this.DataTypeDetection().isDocument(dom)) {
			let width = dom.offsetWidth;
			let height = dom.offsetHeight;
			return { width, height };
		}
	}

	/**
	 * dom赋值
	 * @param {dom元素} Element _dom 
	 * @param {内容} String text 
	 */
	DomSetVal(dom = '', text = '') {
		if (dom && this.DataTypeDetection().isDocument(dom)) {
			if (dom.innerText) {
				dom.innerText = text; //IE8及之前的浏览器支持，现在两者都支持
			} else {
				dom.textContent = text; //低版本的火狐支持
			}
		}
		return dom;
	}

	/**
	 * dom取值
	 * @param {dom元素} Element _dom 
	 */
	DomGetVal(dom = '') {
		let Text;
		if (dom && this.DataTypeDetection().isDocument(dom)) {
			if (dom.innerText) {
				Text = dom.innerText; //IE8及之前的浏览器支持，现在两者都支持
			} else {
				Text = dom.textContent; //低版本的火狐支持
			}
		}
		return Text;
	}

	/**
	 * 创建 竖向 区间分隔
	 * @param {class类名} String _class 
	 */
	EditorResizerCol(_class = '') {
		let div = document.createElement('div');
		div.className = 'editor-resizer-col';
		if (this.DataTypeDetection().isString(_class)) {
			div.className += ` ${_class}`;
		}
		return div;
	}

	/**
	 * 创建 横向向 区间分隔
	 * @param {class类名} String _class 
	 */
	EditorResizerRow(_class = '') {
		let div = document.createElement('div');
		div.className = 'editor-resizer-row';
		if (this.DataTypeDetection().isString(_class)) {
			div.className += ` ${_class}`;
		}
		return div;
	}

	/**
	 * titile 生成    分区名称
	 * @param {内容} String title 
	 */
	CreateTitle(title = '编程实践区') {
		let div = document.createElement('div');
		div.className = 'editor-title';
		let text = document.createElement('div');
		text.className = 'title-text';
		if (this.DataTypeDetection().isString(title)) {
			this.DomSetVal(text, title);
		}
		div.appendChild(text);
		return div;
	}

	/**
	 * 编辑区类型 区域生成  编辑区 模式名称
	 * @param {内容} String name 
	 */
	CreateEditorName(name = 'html') {
		let div = document.createElement('div');
		div.className = 'create-editor-name';
		let text = document.createElement('div');
		text.className = 'title-text';
		if (this.DataTypeDetection().isString(name)) {
			this.DomSetVal(text, name);
		}
		div.appendChild(text);
		if (name == 'html' || name == 'js' || name == 'css') {
			//添加当前编译模式
			let span = document.createElement('span');
			//this.DomSetVal(span, `(none)`);
			text.appendChild(span);
			if (
				this.configuration.iconSettingIsShow &&
				this.DataTypeDetection().isBoolean(this.configuration.iconSettingIsShow)
			) {
				if (name != 'html') {
					//添加设置按钮
					div.appendChild(this.CreateIconForSetting(name));
				}
			}
		}
		return div;
	}

	/**
	 * 箭头 icon生成
	 * @param {} 
	 */
	CreateUpDownIcon() {
		let div = document.createElement('div');
		div.className = 'up-down-icon';
		let span_up = document.createElement('span');
		span_up.className = 'iconfont icon-zhankai up';
		div.appendChild(span_up);
		return div;
	}

	/**
	 * input 拖拽图标生成
	 */
	CreateMoveIcon() {
		let div = document.createElement('div');
		div.className = 'move-input';
		let move = document.createElement('span');
		move.className = 'iconfont icon-zhangjie move';
		div.appendChild(move);
		return div;
	}

	/**
	 * 删除input item icon 生成
	 * @param {回调函数} Function callback 
	 */
	CreateDeleteIcon(callback) {
		let div = document.createElement('div');
		div.className = 'delete-input';
		let _delete = document.createElement('span');
		_delete.className = 'iconfont icon-cha_hover delete';
		div.appendChild(_delete);

		return div;
	}

	/**
	 * 搜索icon生成
	 */
	CreateSearchIcon() {
		let div = document.createElement('div');
		div.className = 'search-input';
		let search = document.createElement('span');
		search.className = 'iconfont icon-sousuo search';
		div.appendChild(search);

		return div;
	}
}

class OnlineProgramming extends Unit {
	constructor(configuration) {
		super();
		this.opaction = {
			mode: {
				name: 'htmlmixed',
				scriptTypes: [
					{
						matches: /\/x-handlebars-template|\/x-mustache/i,
						mode: null
					},
					{
						matches: /(text|application)\/(x-)?vb(a|script)/i,
						mode: 'vbscript'
					}
				]
			},
			theme: 'isotope', //编辑器主题
			extraKeys: {
				Tab: 'autocomplete', //Tab可以弹出选择项
				'Ctrl-/': 'toggleComment', //注释
				F11: function (cm) {
					//全屏
					cm.setOption('fullScreen', !cm.getOption('fullScreen'));
				},
				Esc: function (cm) {
					//推出全屏
					if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false);
				},
				'Ctrl-J': 'toMatchingTag' //跳转匹配标签
			},
			readOnly: false, //禁用编辑器
			lineNumbers: true, //显示行号
			lineWrapping: true,
			foldGutter: true, //代码折叠
			gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
			scrollbarStyle: 'simple', //overlay
			styleActiveLine: true, //选中行 高亮
			lint: false, //错误检测
			matchBrackets: true, //括号匹配
			autoCloseBrackets: true, //自动闭合括号
			matchTags: { bothTags: true }, //html标签匹配
			autoCloseTags: true, //自动闭合 标签
			replaceFind: true, //搜索替换
			continueComments: 'Enter', //在注释行按下Enter 下一行会跟着注释
			highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true } //标记选中 所有匹配高亮 滚动条显示位置
		};
		//可配置项
		this.configuration = Object.assign(
			{
				id: '', //容器
				readOnly: false, //禁用编辑器
				isPaste: false, //是否禁用粘贴
				currentMode: 'html/css/js', //当前编辑器模式
				disabledForSelect: false, //是否禁用select
				disabledForInput: false, //是否禁用input
				styleAreaIsShow: true, //是否生成样式展示区
				iconSettingIsShow: true, //是否生成设置按钮
				externalLink: [], //外部链接 支持链接
				button: [
					//底部按钮表现形势    如果不传  则 不显示
					{
						text: '自定义按钮',
						style: 'background: #ff0000'
					}
				]
			},
			configuration
		);
		//支持的语言
		this.option = ['html/css/js', 'java', 'c#', 'pathon2', 'python3'];
		//支持的 编译模式
		this.preprocessor = {
			// 'html': {
			// 	preprocessor: [''],//编译模式
			// },
			css: {
				preprocessor: ['', 'scss', 'less'] //编译模式
			},
			js: {
				preprocessor: [
					//编译模式
					'',
					'es6',
					'typescript'
					// 'vue',
					// 'react'
				]
			}
		};
		//语法支持
		this.support_language = {
			'html/css/js': {
				name: 'htmlmixed',
				scriptTypes: [
					{
						matches: /\/x-handlebars-template|\/x-mustache/i,
						mode: null
					},
					{
						matches: /(text|application)\/(x-)?vb(a|script)/i,
						mode: 'vbscript'
					}
				]
			},
			html: 'text/html',
			js: 'text/javascript',
			css: 'text/css',
			java: 'text/x-java',
			'c++': 'text/x-c++src',
			'c#': 'text/x-csharp',
			scss: 'text/x-scss',
			sass: 'sass',
			less: 'text/x-less',
			python2: {
				name: 'python',
				version: 2,
				singleLineStringErrors: false
			},
			python3: {
				name: 'python',
				version: 3,
				singleLineStringErrors: false
			}
			// vue:{
			// 	name: "vue"
			//   }
		};
		this.editor = {};
		this.Init();
	}

	/**
	 * 动态写入 <script> 支持代码检测
	 */
	DynamicWriteScript() {
		let _src = [
			'https://cdn.bootcss.com/jshint/2.9.7/jshint.min.js',
			'https://cdn.bootcss.com/jsonlint/1.6.0/jsonlint.min.js',
			'https://unpkg.com/csslint@1.0.5/dist/csslint.js'
		];
		let _src_length = _src.length;
		//循环加载 script
		while (_src.length > 0) {
			//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
			this.LoadScripts(_src.shift(), (t) => {
				_src_length--;
				//依赖 全部 加载完成  启动lint检测
				if (_src_length == 0) {
					for (let key in this.editor) {
						this.editor[key].setOption('lint', true);
					}
				}
			});
		}
	}

	/**
	 * 整体布局
	 */
	DomLayout() {
		let outermost_layer = document.querySelector(`#${this.configuration.id}`);
		if (!outermost_layer || !this.DataTypeDetection().isDocument(outermost_layer)) {
			throw `未能检测到id--${this.configuration.id}`;
		}
		let div = document.createElement('div');
		div.className = 'online-programming';
		//竖向分区
		div.appendChild(this.EditorResizerCol());
		//编辑区
		div.appendChild(this.ProgrammingPracticeArea());
		//竖向分区
		div.appendChild(this.EditorResizerCol('col-resize'));

		if (
			this.configuration.styleAreaIsShow &&
			this.DataTypeDetection().isBoolean(this.configuration.styleAreaIsShow)
		) {
			//样式展示区
			div.appendChild(this.StyleArea());
			//竖向分区
			div.appendChild(this.EditorResizerCol());
		}
		if (
			this.configuration.iconSettingIsShow &&
			this.DataTypeDetection().isBoolean(this.configuration.iconSettingIsShow)
		) {
			//弹框
			div.appendChild(this.SettingDiaLog(this.preprocessor));
		}

		outermost_layer.appendChild(div);

		//动态写<script>
		this.DynamicWriteScript();

		//编辑器初始化
		this.EditorInit();

		if (
			this.configuration.styleAreaIsShow &&
			this.DataTypeDetection().isBoolean(this.configuration.styleAreaIsShow)
		) {
			//区域拖拽初始化
			this.ResizerMove();
		}

		//初始化 input 拖拽排序
		for (var key in this.preprocessor) {
			if (document.querySelector(`#${this.configuration.id} .sortable-${key}`)) {
				this.InputInitMove(document.querySelector(`#${this.configuration.id} .sortable-${key}`), '.move-input');
			}
		}

		//默认模式 加载
		if (this.configuration.currentMode && this.DataTypeDetection().isString(this.configuration.currentMode)) {
			this.SelectEventForChangeMode(this.configuration.currentMode, this);
		}

		//输入框 还原
		let rest = setTimeout(() => {
			this.InputOrSelectRevivification();
			clearTimeout(rest);
		}, 300);
	}

	/**
	 * 编程实践区
	 */
	ProgrammingPracticeArea() {
		let div = document.createElement('div');
		div.className = 'programming-practice-area';
		if (
			!this.configuration.styleAreaIsShow &&
			this.DataTypeDetection().isBoolean(this.configuration.styleAreaIsShow)
		) {
			div.style.width = 'calc(100% - 40px)';
		}
		//title 区
		let CreateTitle = this.CreateTitle('编程实践区');
		if (
			!this.configuration.disabledForSelect &&
			this.DataTypeDetection().isBoolean(this.configuration.disabledForSelect)
		) {
			CreateTitle.appendChild(
				this.CreateSleect(
					this.option,
					'change-mode',
					this.configuration.currentMode,
					this.configuration.disabledForSelect,
					this.SelectEventForChangeMode
				)
			);
		}

		div.appendChild(CreateTitle);
		//编程区
		div.appendChild(this.CreateEditor());
		//底部按扭区
		div.appendChild(this.ButtonOperationArea());

		return div;
	}

	/**
	 * 编程实践底部按扭区
	 */
	ButtonOperationArea() {
		let buttonOperationArea = document.createElement('div');
		buttonOperationArea.className = 'button-operation-area';
		if (this.configuration.button && this.DataTypeDetection().isArray(this.configuration.button)) {
			for (let i = 0; i < this.configuration.button.length; i++) {
				let btn = this.CreateButton(this.configuration.button[i], i);
				buttonOperationArea.appendChild(btn);
			}
		}
		return buttonOperationArea;
	}

	/**
	 * 按钮生成
	 * @param {this.configuration.button} String bute 
	 * @param {循环变量} Number i 
	 */
	CreateButton(bute = '', i = 0) {
		let btn = document.createElement('button');
		btn.className = `btn_${i + 1}`;
		btn.setAttribute('style', bute.style ? bute.style : '');
		this.DomSetVal(btn, bute.text ? bute.text : '');
		return btn;
	}

	/**
	 * 按钮事件注册
	 * @param {外部传入 用于注册方法} callback_object 
	 */
	EventForButton(callback_object) {
		let parentNode = document.querySelector(`#${this.configuration.id} .button-operation-area`);
		if (callback_object && this.DataTypeDetection().isArray(callback_object)) {
			for (let i = 0; i < parentNode.children.length; i++) {
				for (let k = 0; k < callback_object.length; k++) {
					if (this.DomGetVal(parentNode.children[i]) == callback_object[i].text) {
						if (
							callback_object[i].callback &&
							this.DataTypeDetection().isFunction(callback_object[i].callback)
						) {
							parentNode.children[i].onclick = callback_object[i].callback;
						}
					}
				}
			}
		}
	}

	/**
	 * 样式展示区
	 */
	StyleArea() {
		let div = document.createElement('div');
		div.className = 'style-area';
		//title 区
		let CreateTitle = this.CreateTitle('样式展示区');
		let div_c = document.createElement('div');
		div_c.className = 'exothecium-box';

		let iframe = document.createElement('iframe');
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('width', '100%');
		iframe.setAttribute('height', '100%');
		div_c.appendChild(iframe);

		div.appendChild(CreateTitle);
		div.appendChild(div_c);
		return div;
	}

	/**
	 * 编辑区生成
	 * @param {根据_type名称生成编辑区} String _type 
	 */
	CreateEditor(_type = 'html/css/js') {
		//编辑器容器
		let div = document.createElement('div');
		div.className = 'exothecium-box';
		let _num, text;
		if (_type == 'html/css/js') {
			_num = 3;
			text = _type.split('/'); //html css js
		} else {
			_num = 1;
			text = [_type];
		}

		for (let i = 0; i < text.length; i++) {
			let editor_box = document.createElement('div');
			editor_box.className = 'editor_box';
			editor_box.setAttribute('mode', text[i]);
			if (_num == 3) {
				editor_box.setAttribute('style', 'height:calc(33.33% - 5px)');
			} else {
				editor_box.setAttribute('style', 'height:calc(100% - 5px)');
			}
			//name
			editor_box.appendChild(this.CreateEditorName(text[i]));
			//textarea
			let textarea = document.createElement('textarea');
			textarea.setAttribute('mode', text[i]);
			editor_box.appendChild(textarea);
			//横向分区
			if (i > 0 && i < text.length) {
				div.appendChild(this.EditorResizerRow('row-resize'));
			} else {
				div.appendChild(this.EditorResizerRow());
			}
			div.appendChild(editor_box);
		}
		return div;
	}

	/**
	 * select 生成
	 * @param {option循环数组} Array _opaction 
	 * @param {class名称} String _class 
	 * @param {select 默认值} String current_mode 
	 * @param {是否禁用Select} String disabledForSelect 
	 * @param {change 回调函数} Function callback 
	 */
	CreateSleect(_opaction = [], _class = '', current_mode = '', disabledForSelect = false, callback) {
		let select = document.createElement('select');
		select.className = _class;
		disabledForSelect ? select.setAttribute('disabled', 'disabled') : '';
		//循环生成 option
		for (let i = 0; i < _opaction.length; i++) {
			let option = document.createElement('option');
			option.setAttribute('value', _opaction[i]);
			//默认选中选项
			if (_opaction[i] == current_mode) {
				option.setAttribute('selected', '');
			}
			//  < ie 11   禁用 scss sass less
			if (this.GetBrowserInfo().isIE() && !this.GetBrowserInfo().isIE11()) {
				if (_opaction[i] != 'scss' && _opaction[i] != 'sass' && _opaction[i] != 'less') {
					this.DomSetVal(option, _opaction[i]);
					select.appendChild(option);
				}
			} else {
				this.DomSetVal(option, _opaction[i]);
				select.appendChild(option);
			}
		}
		select.onchange = (e) => {
			let text = this.DomGetVal(select.options[select.selectedIndex]);
			let _event = e || window.event;
			let _target = _event.target || _event.srcElement;
			if (callback && this.DataTypeDetection().isFunction(callback)) {
				callback(text, this, _target);
			}
		};

		return select;
	}

	/**
	 * input 生成
	 * @param {class 类名} String _class 
	 * @param {placeholder} String placeholder 
	 * @param {chang 回调函数} Function callback 
	 */
	CreateInput(_class = '', placeholder = 'https://codepen.io/username/pen/aBcDef', callback) {
		let input = document.createElement('input');
		input.className = _class;
		input.setAttribute('type', 'text');
		input.setAttribute('placeholder', placeholder);
		input.setAttribute('autocomplete', 'off');
		if (
			this.configuration.disabledForInput &&
			this.DataTypeDetection().isBoolean(this.configuration.disabledForInput)
		) {
			input.setAttribute('disabled', 'disabled');
		}
		let pattern = /^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
		input.onchange = (e) => {
			let _event = e || window.event;
			let _target = _event.target || _event.srcElement;
			if (pattern.test(_target.value)) {
				_target.style.borderColor = '#eaedf0';
				_target.setAttribute('title', '');
			} else {
				_target.style.borderColor = 'red';
				_target.setAttribute('title', '请与所请求的格式保持一致');
			}
		};
		return input;
	}

	/**
	 * 设置图标按钮生成
	 * @param {data-type 指定值  用于确认点击类型} String name 
	 */
	CreateIconForSetting(name = '') {
		let div = document.createElement('div');
		div.className = 'setting-icon-box';
		div.setAttribute('data-type', name);
		div.onclick = (e) => {
			document.querySelector('.setting-dialog').setAttribute('style', 'display:block');
			let _event = e || window.event;
			let _target = _event.target || _event.srcElement;
			//tab选区
			let tabChildren = document.querySelector('.item-settings-modal .settings-tabs').children;
			//设置区
			let createSettingsChildren = document.querySelector('.item-settings-modal .settings .setting-box').children;
			//下面逻辑 控制 设置区  选中显示  未选中 隐藏
			for (let i = 0; i < tabChildren.length; i++) {
				tabChildren[i].className = 'settings-tab-link';
				_target.getAttribute('data-type') == tabChildren[i].getAttribute('data-type')
					? (tabChildren[i].className += ' active')
					: (tabChildren[i].className = 'settings-tab-link');
			}
			for (let i = 0; i < createSettingsChildren.length; i++) {
				_target.getAttribute('data-type') == createSettingsChildren[i].getAttribute('data-type')
					? createSettingsChildren[i].setAttribute('style', 'display:block')
					: createSettingsChildren[i].setAttribute('style', 'display:none');
			}
		};
		let span = document.createElement('span');
		span.className = 'iconfont icon-shezhi';
		span.setAttribute('data-type', name);
		div.appendChild(span);
		return div;
	}

	/**
	 * 设置弹框生成
	 * @param {用于循环生成弹框内容} Array _array 
	 */
	SettingDiaLog(_array = {}) {
		let div = document.createElement('div');
		div.className = 'setting-dialog';
		let div_c = document.createElement('div');
		div_c.className = 'item-settings-modal';
		let header = document.createElement('div');
		header.className = 'header';
		let h2 = document.createElement('h2');
		this.DomSetVal(h2, '设置');
		//关闭按钮
		let btn = document.createElement('input');
		btn.setAttribute('type', 'button');
		btn.setAttribute('value', '关闭');
		btn.className = 'close-settings';
		btn.onclick = () => {
			document.querySelector('.setting-dialog').setAttribute('style', 'display:none');
		};
		header.appendChild(h2);
		header.appendChild(btn);
		div_c.appendChild(header);
		//tab
		div_c.appendChild(this.CreateTabs(_array));
		//setting
		let settings = document.createElement('div');
		settings.className = 'settings';
		settings.appendChild(this.CreateSettings(_array));
		div_c.appendChild(settings);
		div.appendChild(div_c);
		return div;
	}

	/**
	 * tab选择区生成
	 * @param {循环生成tab} Obiect _array 
	 */
	CreateTabs(_array = {}) {
		let tab = document.createElement('div');
		tab.className = 'settings-tabs';
		for (let key in _array) {
			let aLink = document.createElement('a');
			aLink.setAttribute('href', 'javascript:;');
			aLink.setAttribute('data-type', key);
			aLink.className = 'settings-tab-link';
			//点击更换class
			aLink.onclick = (e) => {
				let _event = e || window.event;
				let _target = _event.target || _event.srcElement;
				let createSettingsChildren = document.querySelector('.item-settings-modal .settings .setting-box')
					.children; //设置区
				for (let i = 0; i < _target.parentNode.children.length; i++) {
					if (_target !== _target.parentNode.children[i]) {
						_target.parentNode.children[i].className.includes('active')
							? (_target.parentNode.children[i].className = 'settings-tab-link')
							: '';
					}
				}
				_target.className.includes('active') ? '' : (_target.className += ' active');
				for (let i = 0; i < createSettingsChildren.length; i++) {
					if (_target.getAttribute('data-type') == createSettingsChildren[i].getAttribute('data-type')) {
						createSettingsChildren[i].setAttribute('style', 'display:block');
					} else {
						createSettingsChildren[i].setAttribute('style', 'display:none');
					}
				}
			};
			this.DomSetVal(aLink, key);
			tab.appendChild(aLink);
		}
		return tab;
	}

	/**
	 * 设置区生成
	 * @param {用于循环生成弹框内容} Obiect _array 
	 */
	CreateSettings(_array = {}) {
		let div = document.createElement('div');
		div.className = 'setting-box';

		for (let key in _array) {
			let box = document.createElement('div');
			box.className = 'setting-type';
			box.setAttribute('data-type', `${key}`);
			//生成预处理器区域
			//--start--
			let preprocessor = document.createElement('h4');
			preprocessor.className = 'preprocessor';
			this.DomSetVal(preprocessor, `${key} 预处理器`);
			box.appendChild(preprocessor);

			let select_box_preprocessor = document.createElement('div');
			select_box_preprocessor.className = 'select-box';
			select_box_preprocessor.appendChild(
				this.CreateSleect(
					_array[key].preprocessor,
					'select-preprocessor',
					'',
					'',
					this.SelectEventForPreprocessor
				)
			);
			//select_box_preprocessor.appendChild(this.CreateUpDownIcon());
			box.appendChild(select_box_preprocessor);
			//--end--
			//生成外部链接引用区域
			//--start--
			let externalScripts = document.createElement('h4');
			externalScripts.className = 'externalScripts';
			this.DomSetVal(externalScripts, `${key} 外部引用`);
			box.appendChild(externalScripts);
			//搜索框生成
			box.appendChild(this.CreateSearchForExternalScripts(key));
			//搜索内容
			if (key != 'html') {
				this.CreateCenterForSearch(box, this.configuration.externalLink[key]);
			}
			//生成 input/select 外部链接区域
			let select_box_externalScripts = document.createElement('div');
			select_box_externalScripts.className = `sortable-box select-box sortable-${key}`;
			select_box_externalScripts.setAttribute('data-type', `sortable-${key}`);
			//初始化2个input框
			this.SortableItemAdd(select_box_externalScripts);
			this.SortableItemAdd(select_box_externalScripts);
			//将删除事件注册在父元素上
			select_box_externalScripts.onclick = (e) => {
				let _event = e || window.event;
				let _target = _event.target || _event.srcElement;
				if (_target.className.includes('delete') || _target.className.includes('delete-input')) {
					if (_target.className.includes('iconfont icon-cha_hover delete')) {
						this.DomDelete(_target.parentNode);
					}
					if (_target.className.includes('delete-input')) {
						this.DomDelete(_target);
					}
				}
			};
			//--end--

			box.appendChild(select_box_externalScripts);

			//添加  ‘增加外部链接 按钮’
			if (
				!this.configuration.disabledForInput &&
				!this.DataTypeDetection().isBoolean(this.configuration.disabledForInput)
			) {
				box.appendChild(this.AddInputItem());
			}

			div.appendChild(box);
		}
		return div;
	}

	/**
	 * 搜索框生成
	 * @param {区分类型 html css js} key 
	 */
	CreateSearchForExternalScripts(key) {
		let div = document.createElement('div');
		div.className = 'search-box';
		//增加搜索图标
		div.appendChild(this.CreateSearchIcon());
		//input 生成
		let input = document.createElement('input');
		input.className = 'search-inputForCdn';
		input.setAttribute('data-type', key);
		input.setAttribute('type', 'text');
		input.setAttribute('autocomplete', 'off');
		input.setAttribute('placeholder', 'Search CDNjs (jQuery, Lodash, React, Angular, Vue.js, Ember...)');
		input.oninput = (e) => {
			let _event = e || window.event;
			_event.preventDefault();
			let _target = _event.target || _event.srcElement;
			if (_target.value) {
				this.SearchHeightChange(_target, 'onfocus');
				this.SearchScreen(_target);
			} else {
				this.SearchHeightChange(_target, 'onblur');
			}
			//this.SearchScreen(_target);
		};
		// input.onfocus = (e) => {
		// 	let _event = e || window.event;
		// 	let _target = _event.target || _event.srcElement;
		// 	this.SearchHeightChange(_target, 'onfocus');
		// };
		input.onblur = (e) => {
			let _event = e || window.event;
			_event.preventDefault();
			let _target = _event.target || _event.srcElement;
			setTimeout(() => {
				this.SearchHeightChange(_target, 'onblur');
			}, 300);
		};
		div.appendChild(input);

		return div;
	}

	/**
	 * 搜索内容 高度变化
	 * @param {input dom} _target 
	 * @param {onblur onfocus} type 
	 */
	SearchHeightChange(_target, type) {
		let dom = _target.parentNode.parentNode;
		if (dom && this.DataTypeDetection().isDocument(dom)) {
			for (let i = 0; i < dom.children.length; i++) {
				if (dom.children[i].className.includes('seach-list-box')) {
					if (type == 'onfocus') {
						dom.children[i].style.height = `230px`;
					} else if (type == 'onblur') {
						dom.children[i].style.height = `0px`;
					}
				}
			}
		}
	}

	/**
	 * 搜索数据筛选
	 * @param {input dom 用于确定input所在位置} _target 
	 */
	SearchScreen(_target) {
		let key = _target.getAttribute('data-type');
		let val = _target.value;
		//深拷贝 JSON.parse JSON.stringify 方法 实现
		let oldArray = JSON.parse(JSON.stringify(this.configuration.externalLink));
		let parentNode = _target.parentNode.parentNode;
		if (oldArray[key] && this.DataTypeDetection().isArray(oldArray[key])) {
			//筛选符合条件的数据
			let findTrue = oldArray[key].filter((item) => {
				if (item.name.includes(val)) {
					if (this.GetBrowserInfo().isIE9()) {
						return item;
					} else {
						//replace 将以前的标签替换掉 split 以val分割字符串   join 加入标签合并字符串
						item.name = item.name
							.replace(/<[^>]+>/gim, '')
							.split(val)
							.join('<span style="color:red;">' + val + '</span>');
						return item;
					}
				}
			});
			if (findTrue && this.DataTypeDetection().isArray(findTrue) && findTrue.length > 0) {
				this.CreateCenterForSearch(parentNode, findTrue);
				this.SearchHeightChange(_target, 'onfocus');
			} else {
				this.SearchHeightChange(_target, 'onblur');
			}
			// this.CreateCenterForSearch(parentNode, findTrue);
			// this.SearchHeightChange(_target, 'onfocus');

			//oldArray还原
			// oldArray = oldArray[key].filter((item) => {
			// 	//replace 将以前的标签替换掉
			// 	item.name = item.name.replace(/<[^>]+>/gim, '');
			// 	return item;
			// });
		}
	}

	/**
	 * 搜索内容列表生成
	 * @param {父元素} _parentNode
	 * @param {用于循环生成的数组} _array 
	 */
	CreateCenterForSearch(_parentNode, _array) {
		if (_parentNode && this.DataTypeDetection().isDocument(_parentNode) && _parentNode.children.length > 0) {
			for (let i = 0; i < _parentNode.children.length; i++) {
				if (_parentNode.children[i].className.includes('seach-list-box')) {
					_parentNode.removeChild(_parentNode.children[i]);
				}
			}
		}
		if (_array && this.DataTypeDetection().isArray(_array)) {
			let div = document.createElement('div');
			div.className = 'seach-list-box';
			div.onclick = (e) => {
				let _event = e || window.event;
				let _target = _event.target || _event.srcElement;
				if (
					_target.className.includes('item-center-name') ||
					_target.className.includes('item-center-version') ||
					_target.className.includes('item-center-top') ||
					_target.className.includes('item-center-link') ||
					_target.className.includes('seach-item')
				) {
					this.SearchCenterChoose(_target);
				}
			};
			//div.onclick();
			for (let i = 0; i < _array.length; i++) {
				let item = document.createElement('div');
				item.className = 'seach-item';
				//center
				let top = document.createElement('div');
				top.className = 'item-center-top';
				let name = document.createElement('div');
				name.className = 'item-center-name';
				//name.setAttribute('data-name',_array[i].name.replace(/<[^>]+>/gim, ''));
				if (this.GetBrowserInfo().isIE9()) {
					this.DomSetVal(name, _array[i].name);
				} else {
					name.innerHTML = _array[i].name;
				}

				let version = document.createElement('div');
				version.className = 'item-center-version';
				this.DomSetVal(version, _array[i].version);
				top.appendChild(name);
				top.appendChild(version);
				let link = document.createElement('div');
				link.className = 'item-center-link';
				link.title = _array[i].link;
				this.DomSetVal(link, _array[i].link);
				item.appendChild(top);
				item.appendChild(link);
				div.appendChild(item);
			}
			if (_parentNode && this.DataTypeDetection().isDocument(_parentNode)) {
				_parentNode.appendChild(div);
			}
		}
	}

	/**
	 * 搜索内容选择
	 * @param {点击 dom} _target 
	 */
	SearchCenterChoose(_target) {
		let _targetParent; //父元素 seach-item
		//点击在name上 || 点击在version
		if (_target.className.includes('item-center-name') || _target.className.includes('item-center-version')) {
			_targetParent = _target.parentNode.parentNode;
		}
		//点击在item-center-top
		if (_target.className.includes('item-center-top')) {
			_targetParent = _target.parentNode;
		}
		//点击在link
		if (_target.className.includes('item-center-link')) {
			_targetParent = _target.parentNode;
		}
		//点击在seach-item
		if (_target.className.includes('seach-item')) {
			_targetParent = _target;
		}
		let link; //取出 dom text    链接
		if (_targetParent && _targetParent.children.length > 0) {
			for (let k = 0; k < _targetParent.children.length; k++) {
				if (_targetParent.children[k].className.includes('item-center-link')) {
					link = this.DomGetVal(_targetParent.children[k]);
				}
			}
		}
		let setting_type = _targetParent.parentNode.parentNode; //setting-type 元素    为了循环children获取input
		let inputArray = this.GetInpoutAll(setting_type).inputArray; //input 集合
		let sortable_box = this.GetInpoutAll(setting_type).sortable_box; //克隆节点 父元素
		if (inputArray && sortable_box) {
			this.InputSetVal(inputArray, link, sortable_box);
		}
		this.ToCloseLint(link, 'js', setting_type);
	}

	/**
	 * 获取input
	 * @param {input 父元素} setting_type 
	 */
	GetInpoutAll(setting_type) {
		let inputArray = []; //input 集合
		let sortable_box; //克隆节点 父元素
		if (setting_type) {
			for (let i = 0; i < setting_type.children.length; i++) {
				if (setting_type.children[i].className.includes('sortable-box')) {
					sortable_box = setting_type.children[i];
					for (let a = 0; a < setting_type.children[i].children.length; a++) {
						for (let b = 0; b < setting_type.children[i].children[a].children.length; b++) {
							//获取input
							if (setting_type.children[i].children[a].children[b].tagName.toLowerCase() == 'input') {
								inputArray.push(setting_type.children[i].children[a].children[b]);
							}
						}
					}
				}
			}
		}
		return { inputArray, sortable_box };
	}

	/**
	 * input 赋值
	 * @param {input 数组} inputArray 
	 * @param {input 赋值} link 
	 * @param {克隆节点所需父元素} sortable_box 
	 */
	InputSetVal(inputArray = [], link = '', sortable_box = '') {
		let valHaveAll = false;
		for (let i = 0; i < inputArray.length; i++) {
			if (!inputArray[i].value) {
				//如果 没有值  赋值 link
				inputArray[i].value = link;
				valHaveAll = false;
				return; //赋值 跳出循环
			} else {
				//如果 都有值
				valHaveAll = true;
			}
		}
		//都有值   要增加input
		if (valHaveAll) {
			if (sortable_box && this.DataTypeDetection().isDocument(sortable_box)) {
				//克隆节点 赋值
				this.DomClone(sortable_box, link);
			}
		}
	}

	/**
	 * 是否关闭代码检测
	 * @param {*} text 
	 * @param {*} type 
	 * @param {父元素} setting_type 
	 */
	ToCloseLint(text, type, setting_type) {
		if (text.includes('react')) {
			this.editor[type].setOption('lint', false);

			//如果为react  则 改变处理器为 es6
			if (setting_type && this.DataTypeDetection().isDocument(setting_type)) {
				for (let i = 0; i < setting_type.children.length; i++) {
					if (
						setting_type.children[i].className.includes('select-box') &&
						!setting_type.children[i].className.includes('sortable-box')
					) {
						setting_type.children[i].children[0].value = 'es6';
						this.SelectEventForPreprocessor('es6', this, setting_type.children[i].children[0]);
					}
				}
			}
		} else {
			this.editor[type].setOption('lint', true);
		}
	}

	/**
	 * 外部链接条目生成  addendChild
	 * @param {父节点} Element parentNode 
	 */
	SortableItemAdd(parentNode = '') {
		if (parentNode && this.DataTypeDetection().isDocument(parentNode)) {
			let sortable_box = document.createElement('div');
			sortable_box.className = 'sortable-item';
			//生成移动icon
			sortable_box.appendChild(this.CreateMoveIcon());
			//生成input
			sortable_box.appendChild(this.CreateInput('select-input-externalScripts'));
			//生成删除icon
			sortable_box.appendChild(this.CreateDeleteIcon(this.DomDelete));

			parentNode.appendChild(sortable_box);
		}
	}

	/**
	 * input 拖拽初始化 Sortable实例化
	 * @param {拖拽外框节点} Element el 
	 * @param {指定拖拽icon类名} String _class 
	 */
	InputInitMove(el = '', _class = '') {
		new Sortable(el, {
			handle: _class, // handle's class
			animation: 150
		});
	}

	/**
	 * 点击增加 input item
	 */
	AddInputItem() {
		let div = document.createElement('div');
		div.className = 'add-input-item';
		this.DomSetVal(div, '+ 增加其他链接');
		div.onclick = (e) => {
			let _event = e || window.event;
			let _target = _event.target || _event.srcElement;
			this.DomClone(_target.previousSibling);
		};
		return div;
	}

	/**
	 * 克隆节点方法
	 * @param {点击增加外部链接按钮 指向本身target} Element _target 
	 * @param {input value} String val 
	 */
	DomClone(_target = '', val = '') {
		if (_target && this.DataTypeDetection().isDocument(_target)) {
			//父节点
			let parentNode = _target;
			//需要克隆的节点
			let clone_dom = _target.children[0].cloneNode(true); //true 深度克隆

			//parentNode.insertBefore(clone_dom,_target);//obj.insertBefore(new,ref)
			if (val && this.DataTypeDetection().isString(val)) {
				clone_dom.children[1].value = val; //克隆input赋值
			} else {
				clone_dom.children[1].value = ''; //清空input内容
			}
			parentNode.appendChild(clone_dom);
		}
	}

	/**
	 * 删除节点操作
	 * @param {点击删除 指向本身target} Element _target 
	 */
	DomDelete(_target = '') {
		if (_target && this.DataTypeDetection().isDocument(_target)) {
			//需要删除的节点
			let delete_dom = _target.parentNode;
			//父节点
			let parentNode = delete_dom.parentNode;
			if (parentNode.children.length > 2) {
				parentNode.removeChild(delete_dom);
			} else {
				//如果剩余两个input 清空val
				for (let i = 0; i < delete_dom.children.length; i++) {
					if (delete_dom.children[i].tagName.toLowerCase() == 'input') {
						delete_dom.children[i].value = '';
					}
				}
			}
		}
	}

	/**
	 * select change 事件 回调    改变编辑区 编译模式
	 * @param {select 的值} String text 
	 * @param {由于用于回调 this指向出现问题 索性用于参数传入} Obiect _this 
	 */
	SelectEventForChangeMode(text = '', _this = '') {
		_this.editor = {};
		_this.ReplactRditor(text);
	}

	/**
	 * 替换编辑区
	 * @param {select 的值} String text 
	 */
	ReplactRditor(text = '') {
		let parent = document.querySelector(`#${this.configuration.id} .programming-practice-area`);
		let old_editor = document.querySelector(`#${this.configuration.id} .programming-practice-area .exothecium-box`);
		let new_editor = this.CreateEditor(text);
		parent.replaceChild(new_editor, old_editor);
		this.EditorInit();
	}

	/**
	 * 编辑器初始化
	 */
	EditorInit() {
		let textNum = document.querySelectorAll(`#${this.configuration.id} .programming-practice-area textarea`);
		if (textNum && textNum.length > 0) {
			for (let i = 0; i < textNum.length; i++) {
				let dom = textNum[i];
				let mode = textNum[i].getAttribute('mode');
				for (let key in this.support_language) {
					if (mode == key) {
						this.opaction.mode = this.support_language[key];
					}
				}
				this.editor[mode] = CodeMirror.fromTextArea(dom, this.opaction);
				this.PasteEvent(mode);
				this.ReadOnlyForEditor();
				this.SetSize(mode);
			}
		}
	}

	/**
	 * select change 事件 回调    修改 预处理器 模式
	 * @param {select 的值} String text 
	 * @param {由于用于回调 this指向出现问题 索性用于参数传入} Obiect _this 
	 * @param {select 本身,用于寻找父元素} Element _target 
	 */
	SelectEventForPreprocessor(text = '', _this = '', _target = '') {
		let parent = document.querySelectorAll(`#${_this.configuration.id} .online-programming .editor_box`);
		//下面逻辑 只是为了更改 编辑模式后面的文字
		for (let i = 0; i < parent.length; i++) {
			if (parent[i].getAttribute('mode') == _target.parentNode.parentNode.getAttribute('data-type')) {
				for (let k = 0; k < parent[i].children.length; k++) {
					if (parent[i].children[k].className == 'create-editor-name') {
						for (let j = 0; j < parent[i].children[k].children.length; j++) {
							if (parent[i].children[k].children[j].className == 'title-text') {
								_this.DomSetVal(parent[i].children[k].children[j].children[0], text ? `(${text})` : '');
							}
						}
					}
				}
			}
		}
		//更改 编译模式
		if (text == '') {
			_this.editor[_target.parentNode.parentNode.getAttribute('data-type')].setOption(
				'mode',
				_this.support_language[_target.parentNode.parentNode.getAttribute('data-type')]
			);
		} else {
			if (_this.support_language[text]) {
				if (
					_this.editor[_target.parentNode.parentNode.getAttribute('data-type')].options.mode !=
					_this.support_language[text]
				) {
					_this.editor[_target.parentNode.parentNode.getAttribute('data-type')].setOption(
						'mode',
						_this.support_language[text]
					);
				}
			}
		}
		//是否关闭代码检测
		if (
			_target.parentNode.parentNode.getAttribute('data-type') == 'js' ||
			_target.parentNode.parentNode.getAttribute('data-type') == 'css'
		) {
			if (text == '') {
				_this.editor[_target.parentNode.parentNode.getAttribute('data-type')].setOption('lint', true);
			} else {
				_this.editor[_target.parentNode.parentNode.getAttribute('data-type')].setOption('lint', false);
			}
			//react 关闭检测
			if (_target.parentNode.parentNode.getAttribute('data-type') == 'js') {
				if (
					_this.GetInpoutAll(_target.parentNode.parentNode).inputArray &&
					_this.DataTypeDetection().isArray(_this.GetInpoutAll(_target.parentNode.parentNode).inputArray)
				) {
					for (let i = 0; i < _this.GetInpoutAll(_target.parentNode.parentNode).inputArray.length; i++) {
						if (
							_this.GetInpoutAll(_target.parentNode.parentNode).inputArray[i].value &&
							_this.GetInpoutAll(_target.parentNode.parentNode).inputArray[i].value.includes('react')
						) {
							_this.ToCloseLint(
								_this.GetInpoutAll(_target.parentNode.parentNode).inputArray[i].value,
								'js'
							);
							return;
						}
					}
				}
			}
		}
	}

	/**
	 * 拖动事件注册
	 */
	ResizerMove() {
		//事件委托
		let EventParent = document.querySelector(`#${this.configuration.id} .online-programming`);
		EventParent.onmousedown = (e) => {
			let _event = e || window.event;
			let _target = _event.target || _event.srcElement;
			//横向拖动
			if (_target.getAttribute('class') && _target.getAttribute('class').includes('col-resize')) {
				this.ResizerCol(_event, _target);
			}
			//竖向拖动
			if (_target.getAttribute('class') && _target.getAttribute('class').includes('row-resize')) {
				this.ResizerRow(_event, _target);
			}
		};
	}

	/**
	 * 横向拖动
	 * @param {e} Object _event 
	 * @param {当前事件执行节点} Element _target 
	 */
	ResizerCol(_event, _target) {
		let prevDom = _target.previousSibling; //获取上一个兄弟节点
		let nextDom = _target.nextSibling; //获取下一个兄弟节点
		let diffX = _event.clientX; //按下时  鼠标位置
		let reg = /[^\(\)]+(?=\))/g; // () 小括号
		let old_prev_width = prevDom.getAttribute('style') ? prevDom.getAttribute('style').match(reg)[0] : '';
		let old_next_width = nextDom.getAttribute('style') ? nextDom.getAttribute('style').match(reg)[0] : '';
		let prev_width = this.DomGetWH(prevDom).width;
		let next_width = this.DomGetWH(nextDom).width;
		document.onmousemove = (event) => {
			let e = event || window.event;
			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			let clientXMove = diffX - e.clientX;
			if (clientXMove < prev_width && clientXMove * -1 < next_width) {
				if (old_prev_width && old_next_width) {
					prevDom.setAttribute('style', `width:calc(${old_prev_width} - ${clientXMove}px)`);
					nextDom.setAttribute('style', `width:calc(${old_next_width} + ${clientXMove}px)`);
				} else {
					prevDom.setAttribute('style', `width:calc(50% - 30px - ${clientXMove}px)`);
					nextDom.setAttribute('style', `width:calc(50% - 30px + ${clientXMove}px)`);
				}
			}
		};
		document.onmouseup = function (event) {
			this.onmousemove = null;
			this.onmouseup = null;
		};
	}

	/**
	 * 竖向拖动
	 * @param {e} Object _event 
	 * @param {当前事件执行节点} Element _target 
	 */
	ResizerRow(_event, _target) {
		let prevDom = _target.previousSibling; //获取上一个兄弟节点
		let nextDom = _target.nextSibling; //获取下一个兄弟节点
		let diffY = _event.clientY; //按下时  鼠标位置
		let reg = /[^\(\)]+(?=\))/g; // () 小括号
		let old_prev_height = prevDom.getAttribute('style') ? prevDom.getAttribute('style').match(reg)[0] : '';
		let old_next_height = nextDom.getAttribute('style') ? nextDom.getAttribute('style').match(reg)[0] : '';
		let prev_height = this.DomGetWH(prevDom).height - 30;
		let next_height = this.DomGetWH(nextDom).height - 30;

		// let old_prev_previousSibling_height;
		// let prev_previousSibling_height;
		// let old_next_nextSibling_height;
		// let next_nextSibling_height;
		// if (prevDom.previousSibling && prevDom.previousSibling.previousSibling) {
		// 	old_prev_previousSibling_height = prevDom.previousSibling.previousSibling.getAttribute('style') ? prevDom.previousSibling.previousSibling.getAttribute('style').match(reg)[0] : '';
		// 	prev_previousSibling_height = this.DomGetWH(prevDom.previousSibling.previousSibling).height - 30;
		// };
		// if (nextDom.nextSibling && nextDom.nextSibling.nextSibling) {
		// 	old_next_nextSibling_height = nextDom.nextSibling.nextSibling.getAttribute('style') ? nextDom.nextSibling.nextSibling.getAttribute('style').match(reg)[0] : '';
		// 	next_nextSibling_height = this.DomGetWH(nextDom.nextSibling.nextSibling).height - 30;
		// };

		document.onmousemove = (event) => {
			let e = event || window.event;
			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			let clientYMove = diffY - e.clientY;
			if (clientYMove < prev_height && clientYMove * -1 < next_height) {
				if (old_prev_height && old_next_height) {
					prevDom.setAttribute('style', `height:calc(${old_prev_height} - ${clientYMove}px)`);
					nextDom.setAttribute('style', `height:calc(${old_next_height} + ${clientYMove}px)`);
				} else {
					prevDom.setAttribute('style', `height:calc(33.33% - 5px - ${clientYMove}px)`);
					nextDom.setAttribute('style', `height:calc(33.33% - 5px + ${clientYMove}px)`);
				}
			} else {
				// if (clientYMove > 0) { //向上
				// 	if (prevDom.previousSibling && prevDom.previousSibling.previousSibling) {
				// 		if (clientYMove < (prev_height + prev_previousSibling_height)) {
				// 			if (old_prev_previousSibling_height) {
				// 				prevDom.previousSibling.previousSibling.setAttribute('style', `height:calc(${old_prev_previousSibling_height} - ${clientYMove - prev_height}px)`);
				// 				nextDom.setAttribute('style', `height:calc(${old_next_height} + ${clientYMove}px)`);
				// 			} else {
				// 				prevDom.previousSibling.previousSibling.setAttribute('style', `height:calc(33.33% - 5px - ${clientYMove - prev_height}px)`);
				// 				nextDom.setAttribute('style', `height:calc(${old_next_height} + ${clientYMove}px)`);
				// 			}
				// 		}
				// 	}
				// } else {//向下
				// 	if (nextDom.nextSibling && nextDom.nextSibling.nextSibling) {
				// 		if ((clientYMove * -1) < (next_height + next_nextSibling_height)) {
				// 			if (old_next_nextSibling_height) {
				// 				nextDom.nextSibling.nextSibling.setAttribute('style', `height:calc(${old_next_nextSibling_height} - ${Math.abs(clientYMove) - next_height}px)`);
				// 				prevDom.setAttribute('style', `height:calc(${old_prev_height} - ${clientYMove}px)`);
				// 			} else {
				// 				nextDom.nextSibling.nextSibling.setAttribute('style', `height:calc(33.33% - 5px - ${Math.abs(clientYMove) - next_height}px)`);
				// 				prevDom.setAttribute('style', `height:calc(33.33% - 5px - ${clientYMove}px)`);
				// 			}
				// 		}
				// 	}
				// }
			}
		};
		document.onmouseup = function (event) {
			this.onmousemove = null;
			this.onmouseup = null;
		};
	}

	//change事件
	ChangeEvent(callback) {
		for (let key in this.editor) {
			this.editor[key].on('change', () => {
				if (callback) {
					callback();
				}
			});
		}
	}

	/**
	 * 禁用编辑器
	 */
	ReadOnlyForEditor() {
		if (this.configuration.readOnly && this.DataTypeDetection().isBoolean(this.configuration.readOnly)) {
			for (let key in this.editor) {
				this.editor[key].setOption('readOnly', true);
			}
		}
	}

	/**
	 * 是否禁用 粘贴功能
	 */
	PasteEvent() {
		if (this.configuration.isPaste && this.DataTypeDetection().isBoolean(this.configuration.isPaste)) {
			for (let key in this.editor) {
				this.editor[key].on('paste', (CodeMirror, Event) => {
					Event.returnValue = false;
				});
			}
		}
	}

	/**
	 * 编辑器大小
	 * @param {*} width 
	 * @param {*} height 
	 */
	SetSize(width = '100%', height = '100%') {
		for (let key in this.editor) {
			this.editor[key].setSize(width, height);
		}
	}

	/**
	 * 重置内容
	 */
	ResetContent() {
		for (let key in this.editor) {
			this.editor[key].setValue('');
		}
		this.SettingInputValNone();
	}

	//设置框 input val 置空
	SettingInputValNone() {
		let inputAll = document.querySelectorAll(`#${this.configuration.id} .setting-dialog .sortable-box input`);
		for (let i = 0; i < inputAll.length; i++) {
			inputAll[i].value = '';
		}
	}

	/**
	 * 获取编辑器内容
	 */
	GetEditorVal() {
		let center_val = [];
		for (let key in this.editor) {
			center_val.push({
				[key]: this.editor[key].getValue()
			});
		}
		return center_val;
	}

	/**
	 * 编辑器初始内容
	 * @param {外部传入 编辑器初始值} Array _array 
	 */
	SetEditorVal(_array) {
		if (_array && this.DataTypeDetection().isArray(_array)) {
			for (let key in this.editor) {
				for (let k = 0; k < _array.length; k++) {
					if (_array[k].key == key) {
						this.editor[key].setValue(_array[k].val);
					}
				}
			}
		}
	}

	/**
	 * sdk初始化
	 */
	Init() {
		if (!this.configuration.id || !this.DataTypeDetection().isString(this.configuration.id)) {
			throw 'id不可为空';
		}
		this.DomLayout();
	}

	/**
	 * 样式展示区初始化 
	 * @param {外部传入内容} Object val 
	 */
	RequestStyleSetVal(val = '') {
		if (!val || !this.DataTypeDetection().isArray(val)) {
			return;
		}
		// let parentNode = document.querySelector(`#${this.configuration.id} .style-area .exothecium-box`);
		// if (!parentNode || !this.DataTypeDetection().isDocument(parentNode)) {
		// 	return;
		// };
		// let old_iframe = document.querySelector(`#${this.configuration.id} .style-area .exothecium-box iframe`);
		// //如果存在 iframe remove掉
		// if (old_iframe) {
		// 	parentNode.removeChild(old_iframe)
		// };

		// let iframe = document.createElement("iframe");
		// iframe.setAttribute('frameborder', '0');
		// iframe.setAttribute('width', '100%');
		// iframe.setAttribute('height', '100%');
		// parentNode.appendChild(iframe);
		let iframe = document.querySelector(`#${this.configuration.id} .style-area .exothecium-box iframe`);
		let ifrdoc = document.all ? iframe.contentWindow.document : iframe.contentDocument;
		//编辑器内容
		let editorCenter = this.FormatStitchingForStyleSetVal(val);
		//ifrdoc.designMode = "on"; //文档进入可编辑模式
		ifrdoc.open(); //打开流
		ifrdoc.write('<!DOCTYPE html>');
		ifrdoc.write('<html lang="en">');
		ifrdoc.write('<head>');
		ifrdoc.write('<meta charset="UTF-8">');
		ifrdoc.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
		ifrdoc.write('<meta http-equiv="X-UA-Compatible" content="ie=edge,Chrome=1">');
		ifrdoc.write('<meta http-equiv="Pragma" content="no-cache">');
		ifrdoc.write('<meta http-equiv="Cache-Control" content="no-cache">');
		ifrdoc.write('<meta http-equiv="Expires" content="0">');
		ifrdoc.write('<title></title>');
		ifrdoc.write('<!--[if IE 9]>');
		ifrdoc.write('<script src="https://cdn.bootcss.com/es5-shim/4.5.12/es5-shim.min.js"></script>');
		ifrdoc.write('<script src="https://cdn.bootcss.com/es5-shim/4.5.12/es5-sham.min.js"></script>');
		ifrdoc.write('<![endif]-->');
		ifrdoc.write('<style>html{color:#fff;}</style>');
		ifrdoc.write('</head>');
		ifrdoc.write('<body>');
		ifrdoc.write(editorCenter);
		ifrdoc.write('</body>');
		ifrdoc.write('</html>');
		ifrdoc.close(); //关闭流
		ifrdoc.contenEditable = false;
		ifrdoc.designMode = 'off'; //文档进入非可编辑模式
	}

	/**
	 * 样式展示区 格式拼接
	 */
	FormatStitchingForStyleSetVal(val) {
		let html; //原始返回的html
		let css; //原始返回的css
		let js; //原始返回的js
		let other;
		for (let i = 0; i < val.length; i++) {
			if (!this.DataTypeDetection().isObject(val[i])) {
				return;
			}
			for (let key in val[i]) {
				if (key == 'html' || key == 'js' || key == 'css') {
					switch (key) {
						case 'html':
							html = val[i][key];
							break;
						case 'js':
							js = val[i][key];
							break;
						case 'css':
							css = val[i][key];
							break;
						default:
							break;
					}
				} else {
					other = val[i][key];
				}
			}
		}

		return this.CenterJoin(html, css, js, other);
	}

	/**
	 * 编译模式获取
	 */
	GetPreprocessor() {
		let title_text = document.querySelectorAll(
			`#${this.configuration
				.id} .programming-practice-area .exothecium-box .editor_box .create-editor-name .title-text`
		);
		let Preprocessor = {};
		for (let i = 0; i < title_text.length; i++) {
			let text = this.DomGetVal(title_text[i]).replace('(', '-');
			let text_new = text.replace(')', '');
			Preprocessor[text_new.split('-')[0]] = text_new.split('-')[1] ? text_new.split('-')[1] : '';
		}
		return Preprocessor;
	}

	/**
	 * 外部链接获取
	 */
	GetExternalScripts() {
		let parentNode = document.querySelectorAll(
			`#${this.configuration.id} .setting-dialog .item-settings-modal .sortable-box.select-box`
		);
		//数据拼接
		let externalScripts = {};
		for (let i = 0; i < parentNode.length; i++) {
			externalScripts[parentNode[i].getAttribute('data-type').split('-')[1]] = [];
		}
		let select_input_externalScripts = document.querySelectorAll(
			`#${this.configuration.id} .setting-dialog .item-settings-modal .sortable-box .select-input-externalScripts`
		);
		for (let key in externalScripts) {
			for (let k = 0; k < select_input_externalScripts.length; k++) {
				if (
					select_input_externalScripts[k].parentNode.parentNode.getAttribute('data-type').split('-')[1] == key
				) {
					for (let i = 0; i < select_input_externalScripts[k].parentNode.children.length; i++) {
						if (select_input_externalScripts[k].parentNode.children[i].tagName.toLowerCase() == 'input') {
							externalScripts[key].push(select_input_externalScripts[k].parentNode.children[i].value);
						}
					}
				}
			}
		}
		return externalScripts;
	}

	/**
	 * 样式展示区代码拼接
	 */
	CenterJoin(html, css, js, other) {
		let center = ``; //拼接后的内容
		if (html || css || js) {
			let _GetExternalScripts = this.GetExternalScripts();
			//增加外部链接
			for (let i = 0; i < _GetExternalScripts['css'].length; i++) {
				if (_GetExternalScripts['css'][i]) {
					center += `
					<link href="${_GetExternalScripts['css'][i]}" rel="stylesheet">
					`;
				}
			}

			let _GetPreprocessor = this.GetPreprocessor();
			switch (_GetPreprocessor['css']) {
				case 'scss':
				case 'sass':
					center += `
					<script src="https://cdn.bootcss.com/sass.js/0.10.13/sass.sync.js"></script>
					<script>
						var scss = ${JSON.stringify(css)};
						var cssString;
						Sass.compile(scss, function (result) {
							cssString = result.text;
							var doc = document;
							var style = doc.createElement("style");
							style.setAttribute("type", "text/css");
							if (style.styleSheet) {// IE
								style.styleSheet.cssText = cssString;
							} else {// w3c
								var cssText = doc.createTextNode(cssString);
								style.appendChild(cssText);
							}
							var heads = doc.getElementsByTagName("head");
							if (heads.length)
								heads[0].appendChild(style);
							else
								doc.documentElement.appendChild(style);
						});
					</script>
					`;
					break;
				case 'less':
					center += `
					<script src="https://cdn.bootcss.com/less.js/3.9.0/less.min.js"></script>
					<script>
						var cssString;
						less.render(${JSON.stringify(css)}, function (e, output) {
						cssString = output.css;
						var doc = document;
							var style = doc.createElement("style");
							style.setAttribute("type", "text/css");
							if (style.styleSheet) {// IE
								style.styleSheet.cssText = cssString;
							} else {// w3c
								var cssText = doc.createTextNode(cssString);
								style.appendChild(cssText);
							}
							var heads = doc.getElementsByTagName("head");
							if (heads.length)
								heads[0].appendChild(style);
							else
								doc.documentElement.appendChild(style);
						});
					</script>
					`;
					break;
				default:
					center += `
					<style>
						${css}
					</style>
					`;
					break;
			}

			switch (_GetPreprocessor['html']) {
				case '':
					center += `
							${html}
					`;
					break;
				default:
					center += `
							${html}
					`;
					break;
			}

			switch (_GetPreprocessor['js']) {
				case 'es6':
					center += `
					<script src="https://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
					<script src="https://cdn.bootcss.com/babel-core/5.8.38/browser-polyfill.min.js"></script>
					<script type="text/babel">
							${js}
					</script>
					`;
					break;
				case 'typescript':
					center += `
					<script src="https://cdn.bootcss.com/typescript/3.2.2/typescript.min.js"></script>
					<script src="http://openbjvp.oss-cn-beijing.aliyuncs.com/fedcdn/OnlineCode/typescript.compile.min.js"></script>
					<script type="text/typescript">
							${js}
					</script>
					`;
					break;
				default:
					let isBabel = [];
					for (let i = 0; i < _GetExternalScripts['js'].length; i++) {
						if (_GetExternalScripts['js'][i].includes('react')) {
							isBabel.push(1);
						} else {
							isBabel.push(2);
						}
					}
					//没有选择 react
					if (!isBabel.includes(1)) {
						center += `
						<script type="text/javascript">
							${js}
						</script>
						`;
					} else {
						//<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
						//<script src="https://cdn.bootcss.com/core-js/2.6.5/core.min.js"></script>
						center += `
						<script type="text/babel">
							${js}
						</script>
						`;
					}
					break;
			}

			//增加外部链接
			for (let i = 0; i < _GetExternalScripts['js'].length; i++) {
				if (_GetExternalScripts['js'][i]) {
					center += `
						<script src="${_GetExternalScripts['js'][i]}"></script>
						`;
				}
			}
		}

		if (other) {
			center = `				
				<style>
					html{
						color:#fff;
					}
				</style>
				${other}
			`;
		}
		return center;
	}

	/**
	 * 经测试发现 IE 页面刷新 input select 值保持不变
	 * input select 内容还原
	 */
	InputOrSelectRevivification() {
		//设置区
		let inputAll = document.querySelectorAll(`#${this.configuration.id} .item-settings-modal .setting-box input`);
		let selectAll = document.querySelectorAll(`#${this.configuration.id} .item-settings-modal .setting-box select`);
		for (let i = 0; i < inputAll.length; i++) {
			inputAll[i].value = '';
		}
		for (let s = 0; s < selectAll.length; s++) {
			selectAll[s].selectedIndex = 0;
		}
		//编辑区
		let selectChangeMode = document.querySelector(`#${this.configuration.id} .editor-title select`);
		if (this.configuration.currentMode && this.DataTypeDetection().isString(this.configuration.currentMode)) {
			selectChangeMode.value = this.configuration.currentMode;
		}
	}

	/********END */
}

export { OnlineProgramming };
