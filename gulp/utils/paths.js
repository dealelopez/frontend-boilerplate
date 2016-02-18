//
//=== RUTAS:
//
/*
Falta:
	+ Sub-rutas para:
		[DONE] banderas (less, images)
		= bootstrap (less, images)
		= fontawesome (less, fuentes)
*/

module.exports = {
	'raiz': './',
	'dev': {
		'raiz': './src/',
		'estatico': './src/static/',
		'plantillas': './src/templates/',
		'less': './src/static/less/',
		'bootstrap_less': './src/static/less/vendor/bootstrap/',
		'fontawesome_less': './src/static/less/vendor/font-awesome/',
		'banderas': {
			'less': './src/static/less/flags/vendor/',
			'imagenes': './src/static/images/flags/',
		},
		'js': './src/static/js/',
		'fuentes': './src/static/fonts/',
		'imagenes': './src/static/images/',
		'svg': './src/static/images/svg/'
	},
	//=== Rutas de test:
	'build': {
		'raiz': './build/',
		'estatico': './build/static/',
		'plantillas': './build/templates/',
		'css': './build/static/css/',
		'less': './build/static/less/',
		'banderas': {
			'less': './build/static/less/flags/',
			'imagenes': './build/static/images/flags/',
		},
		'js': './build/static/js/',
		'fuentes': './build/static/fonts/',
		'imagenes': './build/static/images/',
		'svg': './build/static/images/svg/'

	},
	//=== Ruta de entrega:
	'dist': {
		'raiz': './dist/',
		'estatico': './dist/static/',
		'plantillas': './dist/templates/',
		'css': './dist/static/css/',
		'less': './dist/static/less/',
		'banderas': {
			'less': './dist/static/less/flags/',
			'imagenes': './dist/static/images/flags/',
		},
		'js': './dist/static/js/',
		'fuentes': './dist/static/fonts/',
		'imagenes': './dist/static/images/',
		'svg': './dist/static/images/svg/'
	}
};