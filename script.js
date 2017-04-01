require('shelljs/global')
const fs = require('fs')
const path = require('path')
const configFile = path.join(__dirname, 'i18n-config.js')
const generatorLangFn = require('./index')

// 配置文件
if(fs.existsSync(configFile)) {
  const configContent = fs.readFileSync(configFile)
  const { src, output } = require(configFile)
  const srcDir = path.resolve(__dirname, src)
  const outputDir = path.resolve(__dirname, output)  

  generatorLangFn({
    srcDir,
    outputDir
  })
} else {
  throw new Error('can\'t find i18n-config file')
}