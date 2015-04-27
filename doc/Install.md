安装配置开发环境
===============

# 1. 源码安装nodejs
 
 下载地址：http://nodejs.org/dist/v0.12.2/node-v0.12.2.tar.gz
 
 解压并进入目录，依次执行如下命令：
 
    $ ./confige
    $ make
    $ sudo make install
  
 验证是否安装成功
 
    $ node -v
    $ npm -v
   
# 2. 配置npm

  * 查看npm配置
  
    $ npm config ls -l
  
  * 取消 `sudo` 调用，每次输入sudo很讨厌
  
    $ npm config set prefix '~/.npm'
    $ export PATH=~/.npm/bin:$PATH #Open or create a ~/.bashrc file and add this line for ubuntu
    $ source ~/.bashrc

  或者，用户的配置文件是 `～/.npmrc`, 你也可以手动创建该文件，并添加如下代码：
  
    prefix = "/home/yourname/.npm"

  当然，要记得添加 `export PATH=~/.npm/bin:$PATH` 到 `~/.bashrc`
 
  * 添加代理
  很多时候，公司有代理，可以使用上述2种方法的任何一种去添加。总之就是在 `～/.npmrc` 中加入：
  
  
    proxy=http://proxy.domain:port/       #Ex: proxy=http://proxy.onecoin.im:8080/
    https_proxy=http://proxy.domain:port/ #Ex: https_proxy=http://proxy.onecoin.im:1080/

# 3. 安装其他组件

  依次安装
  
      $ npm install -g bower
      $ npm install -g watchman
      $ npm install -g phantomjs
  

