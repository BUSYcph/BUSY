/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `BUSY ApS`,
		description: `We create purpose driven user interface concepts for any suited media, either from our office in Copenhagen or in your house - and always in close collaboration with your people.`,
		author: `BUSY ApS`,
	},
	/* Your site config here */
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'content',
				path: `${__dirname}/content`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590,
							quality: 80,
						},
					},
				],
			},
		},

		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				typekit: {
					id: 'nix1exl'
				}
			}
		}
	]
}
