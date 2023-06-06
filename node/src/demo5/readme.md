
## npm 与 包
CommonJs 中，模块分为三类：内置模块、自定义模块、第三模块（即包）
### 包的来源
第三方团队或个人开发出来的，免费供所有人使用
### 包的优势
NodeJs 内置模块提供了一些底层 API，导致内置模块进行项目开发时，效率低。<b>使用第三方包提高开发效率</b>
<u>包是基于内置模块封装出来的</u>，提供了一些更高级、更方便的 API，极大的提高了开发效率。

### 包管理平台
npm.Inc https://www.npmjs.com 全球最大的包共享平台
        https://registry.npmjs.org 服务器，对外共享所有的包。可以从这个服务器上下载需要的包

### 下载包
Node Package Manager

## demo
格式化时间
1.  创建格式化时间
2.  定义格式化时间的方法
3.  创建补零函数
4.  从自定义模块中导出格式化时间的方法
5.  导入格式化时间的自定义模块
6.  调用格式化时间的函数

## 安装包
`npm install moment`    安装的是最新版本的包
`npm i moment@2.24.0`   安装指定版本的包
|num|name|description|
|--|--|--|
|2|大版本|重构|
|23|功能版本|加入新功能|
|0|Bug 修复版本|bug 发布后版本|

版本提升规则：<b>只要前面的版本号增长了，帽后面的版本号归零</b>。

## npm 相关文件
node_modules 存放所有已安装到项目中的包。require() 导入第三方包时，就是从这个目录中查找并加载包。
package-lock.json 配置文件，用来记录 node_modules 目录下的每一个包的下载信息。包括名字、版本号、下载地址

package.json 包管理配置文件，处于项目根目录下。用来记录项目有关的一些配置信息。