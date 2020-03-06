# AutoCodeFormatting

###### Overview

This project basically demonstrates that how we can do **auto code formatting with prettier and js-beautify using lint-staged & husky** which will allow us to do auto code formatting on git pre-commit hook.

###### Use of prettier, js-beautify, lint-staged and husky

We will use **prettier** to do code formatting for all file types like typescript(ts), javascript(js), css, scss, less, json, JSX, GraphQL, YAML etc **_except html file because it is in trial phase at the time of this project creation_**

We will use **js-beautify** to do code formatting for html file types

we will use **lint-staged** to do code formatting **only against staged git files and don't let 💩 slip into your entire code base!**

we will use **husky** to run our auto code formatting things on git pre-commit hook so that on each commit we make sure all commited code will be formatted with our defined formatting rules **no matter developers installed this formatting plugins(prettier, js-beautify) on their machine or not!**

###### Advantages

- **So PR(Pull Request) reviewers can get rid of pain of unnecessary white spaces while reviewing developers code.**
- **Our pre-define global code formatting rules will always follow in our remote central repository. so no matter developers installed this formatting plugins(prettier, js-beautify) on their machine or not!**
- **Save your development time without worrying code formatting**

## Scripts details of package.json

- **start** : Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- **format:prettier** : Run `npm run format:prettier` to format all typescript(ts), javascript(js), css, scss, less, json, JSX, GraphQL, YAML file types of code located under `src` folder.
- **format:html** : Run `npm run format:html` to format all html file types of code located under `src` folder.
- **format** : Run `npm run format` to format all file types of code located under `src` folder which is basically combination of above 2 script(npm run format:prettier && npm run format:html).

## Config files list for code formtting

- `.prettierrc` : This file contains rules for how we want to format our code for typescript(ts), javascript(js), css, scss, less, json, JSX, GraphQL, YAML file types.
- `.prettierignore` : This file defines which files we want to ignore for code formatting.
- `.jsbeautifyrc` : This file contains rules for how we want to format our code for html file types.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## That's it!! :relaxed: Now do your code without worrying of code formatting :relaxed:
