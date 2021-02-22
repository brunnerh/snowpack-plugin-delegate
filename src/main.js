// @ts-check

/**
 * @param {import('snowpack').SnowpackConfig} snowpackConfig 
 * @param {import('snowpack').SnowpackPlugin & { init?: (cfg: import('snowpack').SnowpackConfig) => void }} pluginOptions 
 */
function pluginFactory(snowpackConfig, pluginOptions)
{
	if (pluginOptions.init)
		pluginOptions.init(snowpackConfig);

	return {
		name: '@brunnerh/snowpack-plugin-delegate',
		...pluginOptions,
	};;
}

module.exports = pluginFactory;