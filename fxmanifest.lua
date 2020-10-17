fx_version 'adamant'
games { 'gta5' }

ui_page 'html/index.html'

files {
	'html/index.html',
	'html/static/css/*.css',
	'html/static/img/*.svg',
	'html/static/js/*.js',
	'html/static/fonts/*.ttf',
	'html/static/fonts/*.eot',
	'html/static/fonts/*.woff',
	'html/static/fonts/*.woff2',
}


client_scripts {
    '@es_extended/locale.lua',
	"client.lua",
	"animation.lua"
}


server_script {
    '@es_extended/locale.lua',
	'@mysql-async/lib/MySQL.lua',
	"server.lua"
}

dependencies {
	'mysql-async',
	'es_extended'
}