const path = require('path');
const cra = require('customize-cra');
const { override, addWebpackAlias, addPostcssPlugins, watchAll } = cra;
 console.log(cra);
const realPath = (pathName) => {
    return path.resolve(__dirname, pathName);
};
const pathAlias = {
    '@components': realPath('src/components'),
    '@api': realPath('src/api'),
    '@src': realPath('src'),
    '@store': realPath('src/store'),
    '@pages': realPath('src/pages'),
    '@router': realPath('src/router'),
    '@global': realPath('src/global')
  // 添加更多的alias
};


module.exports = override(
    addWebpackAlias(pathAlias),
    addPostcssPlugins([
        require('autoprefixer')
    ])
);

// module.exports = override(
//     
//   );
