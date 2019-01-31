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
import 'codemirror/mode/vue/vue';
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

	//获取dom 宽高
	DomGetWH(_dom = '') {
		let dom = _dom;
		if (dom) {
			let width = dom.offsetWidth;
			let height = dom.offsetHeight;
			return { width, height };
		}
	}

	//dom赋值
	DomSetVal(dom = '', text = '') {
		if (dom) {
			if (dom.innerText) {
				dom.innerText = text; //IE8及之前的浏览器支持，现在两者都支持
			} else {
				dom.textContent = text; //低版本的火狐支持
			}
		}
		return dom;
	}
	//dom取值
	DomGetVal(dom = '') {
		let Text;
		if (dom) {
			if (dom.innerText) {
				Text = dom.innerText; //IE8及之前的浏览器支持，现在两者都支持
			} else {
				Text = dom.textContent; //低版本的火狐支持
			}
		}
		return Text;
	}

	//创建 竖向 区间分隔
	EditorResizerCol(_class = '') {
		let div = document.createElement('div');
		div.className = 'editor-resizer-col';
		div.className += ` ${_class}`;
		return div;
	}
	//创建 横向向 区间分隔
	EditorResizerRow(_class = '') {
		let div = document.createElement('div');
		div.className = 'editor-resizer-row';
		div.className += ` ${_class}`;
		return div;
	}

	//titile 生成
	CreateTitle(title = '编程实践区') {
		let div = document.createElement('div');
		div.className = 'editor-title';
		let text = document.createElement('div');
		text.className = 'title-text';
		div.appendChild(this.DomSetVal(text, title));
		return div;
	}

	//编辑区生成
	CreateEditor(_type = 'html/css/js') {
		//编辑器容器
		let div = document.createElement('div');
		div.className = 'exothecium-box';
		let _num, text;
		if (_type == 'html/css/js') {
			_num = 3;
			text = _type.split('/');
		} else {
			_num = 1;
			text = [_type];
		}
		for (let i = 0; i < _num; i++) {
			let editor_box = document.createElement('div');
			editor_box.className = 'editor_box';
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
			if (i > 0 && i < _num) {
				div.appendChild(this.EditorResizerRow('row-resize'));
			} else {
				div.appendChild(this.EditorResizerRow());
			}
			div.appendChild(editor_box);
		}
		return div;
	}

	//按钮操作区
	ButtonOperationArea() {
		let div = document.createElement('div');
		div.className = 'button-operation-area';
		return div;
	}

	//按钮生成
	CreateButton(bute = '', i = 0) {
		let btn = document.createElement('button');
		btn.className = `btn_${i + 1}`;
		btn.setAttribute('style', bute.style ? bute.style : '');
		btn.onclick = bute.callback ? bute.callback : null;
		return this.DomSetVal(btn, bute.text ? bute.text : '');
	}

	//编辑区类型 区域生成
	CreateEditorName(name = 'html') {
		let div = document.createElement('div');
		div.className = 'create-editor-name';
		let text = document.createElement('div');
		text.className = 'title-text';
		div.appendChild(this.DomSetVal(text, name));
		if(name == 'html' || name == 'js' || name == 'css'){
			div.appendChild(this.CreateIconForSetting(name))
		}
		return div;
	}

	//select 生成
	CreateSleect(_opaction = [],_class = '') {
		let select = document.createElement('select');
		select.className = _class;
		for (let i = 0; i < _opaction.length; i++) {
			let option = document.createElement('option');
			this.DomSetVal(option, _opaction[i]);
			select.appendChild(option);
		}
		return select;
	}

	//设置图标按钮生成
	CreateIconForSetting(name = ''){
		let div = document.createElement('div');
		div.className = 'setting-icon-box';
		let span = document.createElement('span');
		span.className = 'iconfont icon-shezhi';
		div.appendChild(span);
		return div;
	}

	//设置弹框生成
	SettingDiaLog(_array = {}){
		let div = document.createElement('div');
		div.className = 'setting-dialog';
		let div_c = document.createElement('div');
		div_c.className = 'item-settings-modal';
		let header = document.createElement('div');
		header.className = 'header';
		let h2 = document.createElement('h2');
		this.DomSetVal(h2,'设置')
		let btn = document.createElement('input');
		btn.setAttribute('type','button');
		btn.setAttribute('value','Close')
		btn.className = 'close-settings';
		header.appendChild(h2);
		header.appendChild(btn);
		div_c.appendChild(header);
		//tab
		let tab = document.createElement('div');
		tab.className = 'settings-tabs';
		
		for(let key in _array){
			let aLink = document.createElement('a');
			aLink.setAttribute('href','javascript:;');
			aLink.setAttribute('data-type',key);
			aLink.className = 'settings-tab-link';
			this.DomSetVal(aLink,key)
			tab.appendChild(aLink)
		}

		div_c.appendChild(tab);
		//setting
		let settings = document.createElement('div');
		settings.className = 'settings';
		settings.appendChild(this.CreateSettings(_array));
		div_c.appendChild(settings);
		div.appendChild(div_c);
		return div;
	};

	//设置区生成
	CreateSettings(_array = {}){
		console.log(_array)
		let div = document.createElement('div');
		let preprocessor = document.createElement('p');
		preprocessor.className = 'preprocessor'

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
			lineNumbers: true, //显示行号
			lineWrapping: true,
			foldGutter: true, //代码折叠
			gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
			scrollbarStyle: 'simple', //overlay
			styleActiveLine: true, //选中行 高亮
			lint: true, //错误检测
			matchBrackets: true, //括号匹配
			autoCloseBrackets: true, //自动闭合括号
			matchTags: { bothTags: true }, //html标签匹配
			autoCloseTags: true, //自动闭合 标签
			replaceFind: true, //搜索替换
			continueComments: 'Enter', //在注释行按下Enter 下一行会跟着注释
			highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true } //标记选中 所有匹配高亮 滚动条显示位置
		};
		this.configuration = Object.assign(
			{
				id: '', //容器
				isPaste: false, //是否禁用粘贴
				button: [
					{
						text: '点击运行',
						callback: () => {
							console.log('点击运行');
							this.GetEditorVal();
						},
						style: 'background: #ff0000'
					},
					{
						text: '重置编码',
						callback: () => {
							console.log('重置编码');
							this.ResetContent();
						},
						style: 'background: #ff6600'
					}
				]
			},
			configuration
		);
		this.option = ['html/css/js', 'java', 'c#', 'pathon2', 'python3'];
		this.preprocessor = {
			'html':{
				preprocessor:[ //编译模式
					'None'
				],
				externalScripts:[ //外部链接插件
					'https://codemirror.net/mode/vue/index.html',
					'https://codemirror.net/mode/vue/index.html'
				]
			},
			'css':{
				preprocessor:[ //编译模式
					'None',
					'Scss',
					'Less',
					'Sass',
				],
				externalScripts:[ //外部链接插件
					'https://codemirror.net/mode/vue/index.html',
					'https://codemirror.net/mode/vue/index.html'
				]
			},
			'javascript':{
				preprocessor:[ //编译模式
					'None',
					'Es6',
					'typescript',
					'vue'
				],
				externalScripts:[ //外部链接插件
					'https://codemirror.net/mode/vue/index.html',
					'https://codemirror.net/mode/vue/index.html'
				]
			},
		}
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
		};
		this.editor = {};
		this.Init();
	}
	//整体布局
	DomLayout() {
		let outermost_layer = document.querySelector(`#${this.configuration.id}`);
		let div = document.createElement('div');
		div.className = 'online-programming';
		//竖向分区
		div.appendChild(this.EditorResizerCol());
		//编辑区
		div.appendChild(this.ProgrammingPracticeArea());
		//竖向分区
		div.appendChild(this.EditorResizerCol('col-resize'));
		//样式展示区
		div.appendChild(this.StyleArea());
		//竖向分区
		div.appendChild(this.EditorResizerCol());
		//弹框
		div.appendChild(this.SettingDiaLog(this.preprocessor))
		outermost_layer.appendChild(div);

		this.EditorInit();
		this.SelectEvent();
		this.ResizerMove();
	}

	//编程实践区
	ProgrammingPracticeArea() {
		let div = document.createElement('div');
		div.className = 'programming-practice-area';
		//title 区
		let CreateTitle = this.CreateTitle('编程实践区');
		CreateTitle.appendChild(this.CreateSleect(this.option,'change-mode'));
		div.appendChild(CreateTitle);
		//编程区
		div.appendChild(this.CreateEditor());
		//底部按扭区
		let buttonOperationArea = this.ButtonOperationArea();
		for (let i = 0; i < this.configuration.button.length; i++) {
			let btn = this.CreateButton(this.configuration.button[i], i);
			buttonOperationArea.appendChild(btn);
		}
		div.appendChild(buttonOperationArea);

		return div;
	}
	//样式展示区
	StyleArea() {
		let div = document.createElement('div');
		div.className = 'style-area';
		//title 区
		let CreateTitle = this.CreateTitle('样式展示区');
		let div_c = document.createElement('div');
		div_c.className = 'exothecium-box';
		div.appendChild(CreateTitle);
		div.appendChild(div_c);
		return div;
	}
	//select change事件注册
	SelectEvent() {
		let select = document.querySelector(
			`#${this.configuration.id} .programming-practice-area .editor-title .change-mode`
		);
		select.onchange = (e) => {
			this.editor = {};
			let text = this.DomGetVal(select.options[select.selectedIndex]);
			this.ReplactRditor(text);
		};
	}
	//拖动事件注册
	ResizerMove() {
		//事件委托
		let EventParent = document.querySelector(`#${this.configuration.id} .online-programming`);
		EventParent.onmousedown = (e) => {
			let _event = e || window.event;
			let _target = _event.target || _event.srcElement;
			//横向拖动
			if (_target.getAttribute('class') && _target.getAttribute('class').includes('col-resize')) {
				this.ResizerCol(_event, _target)
			};
			//竖向拖动
			if (_target.getAttribute('class') && _target.getAttribute('class').includes('row-resize')) {
				this.ResizerRow(_event, _target)
			};
		};
	}
	//横向拖动
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
			if (clientXMove < prev_width && (clientXMove * -1) < next_width) {
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
	//竖向拖动
	ResizerRow(_event, _target) {
		let prevDom = _target.previousSibling; //获取上一个兄弟节点
		let nextDom = _target.nextSibling; //获取下一个兄弟节点
		let diffY = _event.clientY; //按下时  鼠标位置
		let reg = /[^\(\)]+(?=\))/g; // () 小括号
		let old_prev_height = prevDom.getAttribute('style') ? prevDom.getAttribute('style').match(reg)[0] : '';
		let old_next_height = nextDom.getAttribute('style') ? nextDom.getAttribute('style').match(reg)[0] : '';
		let prev_height = this.DomGetWH(prevDom).height - 30;
		let next_height = this.DomGetWH(nextDom).height - 30;

		let old_prev_previousSibling_height;
		let prev_previousSibling_height;
		let old_next_nextSibling_height;
		let next_nextSibling_height;
		if(prevDom.previousSibling && prevDom.previousSibling.previousSibling){
			old_prev_previousSibling_height = prevDom.previousSibling.previousSibling.getAttribute('style') ? prevDom.previousSibling.previousSibling.getAttribute('style').match(reg)[0] : '';
			prev_previousSibling_height = this.DomGetWH(prevDom.previousSibling.previousSibling).height - 30;
		};
		if(nextDom.nextSibling && nextDom.nextSibling.nextSibling){
			old_next_nextSibling_height = nextDom.nextSibling.nextSibling.getAttribute('style') ? nextDom.nextSibling.nextSibling.getAttribute('style').match(reg)[0] : '';
			next_nextSibling_height = this.DomGetWH(nextDom.nextSibling.nextSibling).height - 30;
		};

		document.onmousemove = (event) => {
			let e = event || window.event;
			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			let clientYMove = diffY - e.clientY;
			console.log(clientYMove)
			if (clientYMove < prev_height && (clientYMove * -1) < next_height) {
				if (old_prev_height && old_next_height) {
					prevDom.setAttribute('style', `height:calc(${old_prev_height} - ${clientYMove}px)`);
					nextDom.setAttribute('style', `height:calc(${old_next_height} + ${clientYMove}px)`);
				} else {
					prevDom.setAttribute('style', `height:calc(33.33% - 5px - ${clientYMove}px)`);
					nextDom.setAttribute('style', `height:calc(33.33% - 5px + ${clientYMove}px)`);
				}
			}else{
				if(clientYMove > 0){ //向上
					if(prevDom.previousSibling && prevDom.previousSibling.previousSibling){
						if (clientYMove < (prev_height + prev_previousSibling_height)) {
							if(old_prev_previousSibling_height){
								prevDom.previousSibling.previousSibling.setAttribute('style', `height:calc(${old_prev_previousSibling_height} - ${clientYMove - prev_height}px)`);
								nextDom.setAttribute('style', `height:calc(${old_next_height} + ${clientYMove}px)`);
							}else{
								prevDom.previousSibling.previousSibling.setAttribute('style', `height:calc(33.33% - 5px - ${clientYMove - prev_height}px)`);
								nextDom.setAttribute('style', `height:calc(${old_next_height} + ${clientYMove}px)`);
							}
						}
					}
				}else{//向下
					if(nextDom.nextSibling && nextDom.nextSibling.nextSibling){
						if ((clientYMove * -1) < (next_height + next_nextSibling_height)) {
							if(old_next_nextSibling_height){
								nextDom.nextSibling.nextSibling.setAttribute('style', `height:calc(${old_next_nextSibling_height} - ${Math.abs(clientYMove) - next_height}px)`);
								prevDom.setAttribute('style', `height:calc(${old_prev_height} - ${clientYMove}px)`);
							}else{
								nextDom.nextSibling.nextSibling.setAttribute('style', `height:calc(33.33% - 5px - ${Math.abs(clientYMove) - next_height}px)`);
								prevDom.setAttribute('style', `height:calc(33.33% - 5px - ${clientYMove}px)`);
							}
						}
					}
				}
			}
		};
		document.onmouseup = function (event) {
			this.onmousemove = null;
			this.onmouseup = null;
		};
	}
	//替换编辑区
	ReplactRditor(text = '') {
		let parent = document.querySelector(`#${this.configuration.id} .programming-practice-area`);
		let old_editor = document.querySelector(`#${this.configuration.id} .programming-practice-area .exothecium-box`);
		let new_editor = this.CreateEditor(text);
		parent.replaceChild(new_editor, old_editor);
		this.EditorInit();
	}
	//编辑器初始化
	EditorInit(dom = '', mode = '') {
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
				this.SetSize(mode);
			}
		}
		console.log(this.editor);
	}
	//change事件
	ChangeEvent(callback) {
		this.EditorInit.on('change', () => {
			if (callback) {
				callback();
			}
		});
	}
	//是否禁用 粘贴功能
	PasteEvent() {
		if (this.configuration.isPaste) {
			for (let key in this.editor) {
				this.editor[key].on('paste', (CodeMirror, Event) => {
					Event.returnValue = false;
				});
			}
		}
	}

	//编辑器大小
	SetSize(width = '100%', height = '100%') {
		for (let key in this.editor) {
			this.editor[key].setSize(width, height);
		}
	}

	//重置内容
	ResetContent() {
		for (let key in this.editor) {
			this.editor[key].setValue('');
		}
	}

	//获取编辑器内容
	GetEditorVal() {
		for (let key in this.editor) {
			console.log(this.editor[key].getValue());
		}
	}

	//初始化
	Init() {
		this.DomLayout();
	}
}

var Online_Programming = new OnlineProgramming({
	id: 'editor-box'
});
console.log(Online_Programming);
