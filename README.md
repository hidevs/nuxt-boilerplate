# Nuxt js boilerplate

<a href="https://laravel.com/" target="_blank">
<img align="left" alt="Laravel" height="40" src="https://github.com/jalallinux/jalallinux/raw/master/assets/icon_laravel.jpg" />
</a>

<a href="https://nuxtjs.org/" target="_blank">
<img align="left" alt="NuxtJs" height="40" src="https://github.com/jalallinux/jalallinux/raw/master/assets/icon_nuxt.png" />
</a>

<a href="https://web.dev/progressive-web-apps/" target="_blank">
<img align="left" alt="PWA" height="40" src="https://github.com/jalallinux/jalallinux/raw/master/assets/icon_pwa.png" />
</a>

<br />

## Installed packages
- [@nuxtjs/vuetify](https://go.nuxtjs.dev/vuetify)
- [@nuxtjs/dotenv](https://github.com/nuxt-community/dotenv-module)
- [@nuxtjs/laravel-echo](https://github.com/nuxt-community/laravel-echo)
- [@nuxtjs/axios](https://go.nuxtjs.dev/axios)
- [@nuxtjs/pwa](https://go.nuxtjs.dev/pwa)
- [@nuxtjs/auth-next](https://auth.nuxtjs.org/)
- [nuxt-izitoast](https://gitlab.com/sweetgum/nuxt-izitoast)

## Usage

### 1. Create .env file and config
`cp .env.example .env`
```dotenv
HOST_URL=http://localhost:3000
API_HOST_URL=http://localhost:8000
APP_NAME=NAME
APP_TAB_PREFIX=TAB_PREFIX

BROADCAST_DRIVER=pusher
PUSHER_APP_KEY=
PUSHER_APP_CLUSTER=

PWA_NAME=PWA_NAME
PWA_SHORT_NAME=PWA_SHORT_NAME
PWA_DESCRIPTION=PWA_DESCRIPTION
PWA_LANG=en
PWA_THEME_COLOR="#000000"
PWA_BACKGROUND_COLOR="#EBBE47"
```

### 2. Config [nuxt.config.js](./nuxt.config.js) file for installed packages
```js
.

/* Progressive Web Apps configuration
 * https://go.nuxtjs.dev/pwa */
pwa: {} // 
.

/* Laravel echo configuration
 * https://github.com/nuxt-community/laravel-echo */
echo: {}
.

/* Toast configuration
 * https://gitlab.com/sweetgum/nuxt-izitoast */
izitoast: {}
.

/* Nuxt Authentication configurations
 * https://auth.nuxtjs.org/ */
auth: {}
.

/* Vuetify configuration
 * https://go.nuxtjs.dev/vuetify */
vuetify: {}
.

/* Axios configurations
 * https://go.nuxtjs.dev/axios */
axios: {}
.
```



### 3. Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
