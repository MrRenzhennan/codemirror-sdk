const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
//启动HappyPack多线程处理loader对文件的转换操作
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
module.exports = [
	///*
	//压缩
	{
		mode: 'production',
		entry: {
			'sdk.min': './src/index.js'
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'js/[name].js',
			library: 'codemirrorSDK',
			libraryTarget: 'umd',
			umdNamedDefine:true
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			host:'0.0.0.0',
			//openPage: '/dist',
			compress: true, //gzip
			port: 9000,
			hot: true
		},
		module: {
			rules: [
				{
					test: /\.(html)$/,
					use: {
						loader: 'html-loader'
					}
				},
				{
					test: /\.js$/,
					exclude: /node_modules/, //  不包括node_modules文件夹
					use: [ 'happypack/loader?id=babel' ]
					// use: {
					// 	loader: 'babel-loader'
					// }
				},
				{
					test: /\.(sa|sc|c)ss$/,
					//use: [ 'happypack/loader?id=css' ]
					use: [
						//"style-loader"
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: '../'
							}
						},
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2
								//modules: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: (loader) => [
									require('autoprefixer')() //CSS浏览器兼容
								]
							}
						},
						'sass-loader'
					]
				},
				{
					test: /\.json$/,
					use: 'json-loader'
				},
				{
					test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
					loader: 'url-loader',
					options: {
					  limit: 10000,
					}
				  },
				  {
					test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
					loader: 'url-loader',
					options: {
					  limit: 10000,
					}
				  },
				  {
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					loader: 'url-loader',
					options: {
					  limit: 10000,
					}
				  }
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				//filename: "css/[name].[hash:6].css",
				filename: 'css/[name].css',
				chunkFilename: '[id].css'
			}),
			// new HtmlWebpackPlugin({
			// 	template: path.join(__dirname) + '/src/index.html'
			// }),
			new optimizeCss({
				cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
				cssProcessorOptions: {
					discardComments: { removeAll: true }
				},
				canPrint: false //是否将插件信息打印到控制台
			}),
			new HappyPack({
				// 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
				id: 'babel',
				// 如何处理 .js 文件，用法和 Loader 配置中一样
				loaders: [ 'babel-loader' ],
				//使用共享进程池中的自进程去处理任务
				threadPool: happyThreadPool,
				//是否允许happypack输出日志，默认true
				verbose: true
			}),
		]
	},
	//*/
	//不压缩
	/*
	{
		mode: 'development',
		entry: {
			sdk: './src/index.js'
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'js/[name].js',
			library: 'codemirrorSDK',
			libraryTarget: 'umd',
			umdNamedDefine:true
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: false, //gzip
			port: 9000,
			hot: true
		},
		module: {
			rules: [
				{
					test: /\.(html)$/,
					use: {
						loader: 'html-loader'
					}
				},
				{
					test: /\.js$/,
					exclude: /node_modules/, //  不包括node_modules文件夹
					use: ['happypack/loader?id=babel']
					// use: {
					// 	loader: 'babel-loader'
					// }
				},
				{
					test: /\.(sa|sc|c)ss$/,
					//use: [ 'happypack/loader?id=css' ]
					use: [
						//"style-loader"
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: '../'
							}
						},
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2
								//modules: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: (loader) => [
									require('autoprefixer')() //CSS浏览器兼容
								]
							}
						},
						'sass-loader'
					]
				},
				{
					test: /\.json$/,
					use: 'json-loader'
				},
				{
					test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 10000,
					}
				},
				{
					test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 10000,
					}
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 10000,
					}
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				//filename: "css/[name].[hash:6].css",
				filename: 'css/[name].css',
				chunkFilename: '[id].css'
			}),
			new HtmlWebpackPlugin({
				template: path.join(__dirname) + '/src/index.html'
			}),
			new HappyPack({
				// 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
				id: 'babel',
				// 如何处理 .js 文件，用法和 Loader 配置中一样
				loaders: ['babel-loader'],
				//使用共享进程池中的自进程去处理任务
				threadPool: happyThreadPool,
				//是否允许happypack输出日志，默认true
				verbose: true
			}),
		]
	}
	//*/
];
