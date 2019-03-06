# sdk支持情况

`sdk只能运行在IE9+`

* 支持禁用粘贴功能  (支持ie11)
* 支持禁止输入功能  (支持ie9+)
* 支持左右 上下拖动 （ie11）
* 支持配置外部链接
* 支持手动输入外部链接引入
* 支持外部链接关键字搜索
* 支持外部链接拖拽排序
* 支持css预处理器
    scss (不支持ie)
    less (ie11)
* 支持es6
* 支持typescript (不支持语法检测,类型断言)
* vue (不支持模板语法)
* react (不支持jsx)
* 支持语言切换
* 支持lint检测（css js）
* 支持快捷键

    ```js
    Tab //智能提示
    Ctrl-/: //注释
    F11: //全屏 退出全屏
    Ctrl-J:  //跳转匹配标签
    Ctrl-F / Cmd-F //开始搜索    (Ctrl-F  输入内容  回车)
    Ctrl-G / Cmd-G //找下一个  (Ctrl-F 匹配内容后   Ctrl-G查找下一个)
    Shift-Ctrl-G / Shift-Cmd-G //找到上一个   (Ctrl-F 匹配内容后  Shift-Ctrl-G查找上一个)
    Shift-Ctrl-F / Cmd-Option-F //更换  (Shift-Ctrl-F 出現搜索框  輸入要替換内容  回車)
    Shift-Ctrl-R / Shift-Cmd-Option-F //全部替换
    ALT-G //跳到指定位置  10：80
    ```
* `后台语言需要调用接口`