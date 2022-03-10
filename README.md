<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-icons-font@v5/font/simple-icons.min.css" type="text/css">

<h1 align="center">React Boilerplate</h1>
<p align="center">This repository contain the basics to start a new project using:</p>

<div align="center">
<i class="si si-react si--color" style="font-size: 40px"></i><span style="margin-right: 20px"></span>
<i class="si si-webpack si--color" style="font-size: 40px"></i><span style="margin-right: 20px"></span>
<i class="si si-babel si--color" style="font-size: 40px"></i><span style="margin-right: 20px"></span>
<i class="si si-typescript si--color" style="font-size: 40px"></i><span style="margin-right: 20px"></span>
<i class="si si-eslint si--color" style="font-size: 40px"></i><span style="margin-right: 20px"></span>
<i class="si si-prettier si--color" style="font-size: 40px"></i>
</div>

<br /><br />


<h2>💡 What you will found?</h2>

You can found the folders structure below:

```
.
├── public
└── src
    ├── assets
    │   ├── styles
    │   └── media
    ├── components
    ├── contexts
    ├── pages
    │   └── Main
    └── shared
        ├── @types
        ├── hooks
        ├── services
        └── utils
```

<h3 style="font-weight: 300">🗂 Details</h3>

> **`public`:** files you want each user can access, like images, favicon, etc.

> **`src/assets`:** on this folder I save my global styles (`global.scss`) and project media (SVG files, images, ...)

> **`src/components`:** all the components to this project

> **`src/contexts`:** in some applications I use contexts, so this folder is for them

> **`src/pages`:** usually I use `react-router-dom` package, and for that, the `Main/index.tsx` is the file with all routes, and to each page I create another folder and respective files in `src/pages`

> **`src/shared/@types`:** you can imagine that is the folder to storage all the types created for this project (yes, I use Typescript!)

> **`src/shared/hooks`:** folder to storage custom hooks

> **`src/shared/services`:** folder to storage external services, usually with `axios` package

> **`src/shared/utils`:** common functions, regex's, etc.

<h3 style="font-weight: 300">📄 Files</h3>

In this boilerplate you can found this initial files:

> **`.dockerignore`, `Dockerfile` and `docker-compose.yml`:** files related with Docker (if you want create a container)
> <small>In this case, I create only the image to run a dev server (not a build server)</small>

> **`.prettierrc` and `.prettierignore`:** **Prettier** configuration files;

> **`.eslintrc.js`:** **ESLint** configuration file

> **`tsconfig.json`:** My configurations to **TypeScript** <small>(I use `baseUrl` option to clean the imports)</small>

> **`webpack.config.js`:** **WebPack** configuration file

>**`.babelrc`:** **Babel** configuration file


<br /><br />

<div align="right" style="margin-top: 50px">
<h3 style="font-weight: 300">
🧑🏻‍💻 About Me
</h3>

<a href="https://github.com/TutoDS" alt="TutoDS">
<img src="https://github.com/tutods.png" alt="Daniel Sousa @TutoDS" width="100px" style="border-radius: 100%">
<br />
 <sub><b>Daniel Sousa @TutoDS</b></sub>
</a>

<div style="margin: 20px 0" />

[facebook]: https://facebook.com/tutods2014
[twitter]: https://twitter.com/tutods
[youtube]: https://youtube.com/tutods2014
[instagram]: https://instagram.com/dsousa_12
[linkedin]: https://www.linkedin.com/in/daniel-sousa-tutods/
[gitlab]: https://gitlab.com/jdaniel.asousa

[<img src="https://img.shields.io/badge/Facebook%20-%232671E5.svg?&style=for-the-badge&logo=Facebook&logoColor=white" alt="Facebook"/>][facebook] [<img src="https://img.shields.io/badge/Twitter%20-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white" alt="Twitter"/>][twitter]

[<img src="https://img.shields.io/badge/LinkedIn%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>][linkedin] [<img src="https://img.shields.io/badge/Instagram%20-%23E4405F.svg?&style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram"/>][instagram]

[<img src="https://img.shields.io/badge/YouTube%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white" alt="YouTube"/>][youtube] [<img src="https://img.shields.io/badge/Gitlab%20-%23181717.svg?&style=for-the-badge&logo=gitlab&logoColor=white"/>][gitlab]

</div>
