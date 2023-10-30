module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{txt,json,jpg,html,mp3,js,wasm,hdr,png,bin,xz,css,gltf,max,ico,svg,xml,JPG,mb,gif,PNG,jpeg,ktx2,mp4,zip,pdf,jfif,blend,md,lock}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};