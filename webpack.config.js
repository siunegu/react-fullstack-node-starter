module.exports = {
	entry: './src/js/client.js',
	output: {
		path: './public',
		filename: 'bundle.js'
	},
	module: {
    preLoaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'source-map'
        }
    ],		
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
      {
          test: /\.scss$/,
          include: /src/,
          loaders: [
              'style',
              'css',
              'autoprefixer?browsers=last 3 versions',
              'sass?outputStyle=expanded'
          ]
      },
      {
          test: /\.(jpg|png|gif|svg)$/i,
          loaders: [
              'url?limit=8192',
              'img'
          ]
      },		
      {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loaders: [
              'react-hot',
              'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
          ]
      }      
		]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	}
};