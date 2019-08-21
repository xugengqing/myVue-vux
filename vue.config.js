module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.113.117:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/coding/': '/'
                }
            }
        }
    }
}