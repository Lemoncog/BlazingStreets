![project logo](https://raw.github.com/webapplate/webapplate/master/public/style/icons/icon128.png) 

# Webapplate 

The template to create new web application.

Webapplate is the Mobile First, full stack WebApp template that help you quickly start the maintainable mobile web app development.
http://webapplate.github.io/

[![Build Status](https://travis-ci.org/webapplate/webapplate.png)](https://travis-ci.org/webapplate/webapplate) [![david-dm](https://david-dm.org/webapplate/webapplate.png)](https://david-dm.org/webapplate/webapplate) [![devDependency Status](https://david-dm.org/webapplate/webapplate/dev-status.svg)](https://david-dm.org/webapplate/webapplate#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/webapplate/webapplate/badge.png?branch=master)](https://coveralls.io/r/webapplate/webapplate?branch=master) [![Code Climate](https://codeclimate.com/github/webapplate/webapplate.png)](https://codeclimate.com/github/webapplate/webapplate)

~~~
                __                      __      __
 _      _____  / /_  ____ _____  ____  / /___ _/ /____
| | /| / / _ \/ __ \/ __ `/ __ \/ __ \/ / __ `/ __/ _ \
| |/ |/ /  __/ /_/ / /_/ / /_/ / /_/ / / /_/ / /_/  __/
|__/|__/\___/_.___/\__,_/ .___/ .___/_/\__,_/\__/\___/
                       /_/   /_/
~~~
current version: v1.8.0

## Why need webapplate?

Though there are many powerful tools surround web technologies, web does not provide the `SDK` or ready to use `template` that just like Android or iOS. Web apps are simple to write but hard to get done right. Developer who wants to quickly build an web app usually consume much longer time to make their web app right.

Thus developer who is approaching to the `web app`(make web site behaves like mobile app) concept need a bootstrap or template project to start with. That's why webapplate comes.


## How webapplate do

Webapplate provide a ready-to-deploy project bootstrap settings for both `hosted` (dynamic/static website) and `packaged` (no server) web app, with convention of file structure, [express](http://expressjs.com/) server-side support, and preconfigured helper tools like code style check, appcache generator, multi-locales and testframework.

Website inherit from Webapplate can be [deployed to any host provider](https://github.com/webapplate/webapplate/wiki/Deployment).

All magics are well integrated and configurable.


## Demos

Here are some examples that start the development by webapplate:

* [UI Demos](https://marketplace.firefox.com/app/ui-demos/) , which is on Firefox Marketplace before Firefox OS device officially release.
* [FxOS BMI](http://gasolin.github.io/fxosbmi/public/index.html) , the BMI calculator demo, with offline support. [Source](https://github.com/gasolin/fxosbmi) is available.
* [bgzla](http://gasolin.github.io/bgzla/), Bugzilla monitor for Gaia project.
* [FoxQR](https://marketplace.firefox.com/app/qrcode-1/), QRCode scanner for Firefox OS, via WebRTC.

## Get Webapplate

Go to https://github.com/webapplate/webapplate website, click 'ZIP' button to download nodera template.

or you can use git command to clone Webapplate:

```
$ git clone https://github.com/webapplate/webapplate.git
```

## Usage

Note: If you use docker, just skip `Setup` section and check `With docker` section.

### Setup

1. install [node.js](http://www.nodejs.org)

2. Install useful command-line tools globally:

    ```
    $ npm install -g grunt-cli bower karma
    ```

   To fetch dependent packages, enter the webapplate folder and run

    ```
    $ npm install
    ```

   To bind the git pre-commit code style check, run command:

    ```
    $ grunt githooks
    ```

### With docker

Webapplate come with docker support. It helps you auto configure the development environment and could be deploy to Amazon Web Service or Google Cloud Platform.

Run

```
docker build -t webapplate .
```

To build image at first time.

In linux, run

```
docker run webapplate
```

to execute the server. You could connect to `localhost:8000` on browser to see the web page.

In other platform docker needs to run within `boot2docker` VM, you could get VM host ip via command

```
$ boot2docker ip
```

Then run command

```
docker run --rm -i -t -p 8000:8000 webapplate
```

To forwarding port to your desktop. Connect to `$(boot2docker ip):8000` on browser to see the web page.
(generally is `http://192.168.59.103:8000/`)

### Develop Hosted webapp (With dynamic/static web Server)

Note: to only install required library for production, run

```
$ npm install --production
```

1. To start the server, run

    ```
    $ grunt server
    ```

    or call the `server.js` manually.

    ```
    $ node server.js
    ```

Now you can open browser and see the web page at localhost:8000. The server.js is a fully functional server side script based on popular [express](http://expressjs.com/) framework, you can expand it to fit your needs.

with `grunt server` command, the browser and server will auto reload when you edit any js file within webapplate so you could preview the result directly.

  The default page is stored in `/publish/index.html`. Read [Syntax](https://github.com/webapplate/webapplate/wiki/Syntax) doc to learn plenty of sensible defaults that webapplate configured for you.

2. To lint check, autotest the project, run

```
$ grunt
```

For server side web app, or

```
$ grunt test
```

For client side web app.

### Develop Packaged webapp (No Server)

Note: to only install required library for production, run

        $ npm install --production

Drag `/public/index.html` into browser. Or select `/public/manifest.webapp` in [Firefox WebIDE](https://developer.mozilla.org/en-US/docs/Tools/WebIDE) or Chrome Extension page.

Plus webapplate enable you to genergate the packaged web app via command:

```
$ grunt pack
```

Which will try to optimize the source for faster web app.

Read [Deployment](https://github.com/webapplate/webapplate/wiki/Deployment#3-packaged-webapp) doc for further configurations.

### Automatic testing during development

While you are editing code, run command:

```
$ grunt karma
```

To automaticly monitor and trigger all test when you change the code.

### Generate static webapp (Server independent - experimental)

Generate minimized static web app:

```
$ grunt static
```

## Features

Check [Feature Set](https://github.com/webapplate/webapplate/wiki/FeatureSet) here.

Or read document at [https://github.com/webapplate/webapplate/wiki](https://github.com/webapplate/webapplate/wiki).

## License

[The MIT License](http://opensource.org/licenses/MIT)

Credit: developers and designers from node.js, express, grunt.js, Firefox OS, bower, and people who involved in improving Web technologies.
