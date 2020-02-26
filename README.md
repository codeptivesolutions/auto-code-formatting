# AutoCodeFormatting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

This project basically demonstrate that how we can do auto code formatting with prettier and js-beautify using lint-staged & husky which will allow us to run our script for auto code formatting on git pre-commit hook

We will use prettier to do code formatting for all file types like typescript(ts), javascript(js), css, scss, less, json, JSX, GraphQL, YAML etc except html file because it is in trial phase at the time of this project creation

We will use js-beautify to do code formatting for html file types

we will use lint-staged to do code formatting only against staged git files and don't let 💩 slip into your entire code base!

we will use husky to run our auto code formatting things on git pre-commit hook so that on each commit we make sure all commited code will be formatted with our defined formatting rules no matter developers installed this formatting plugins(prettier, js-beautify) on their machine or not!

So PR(Pull Request) reviewers can get rid of pain of unnecessary white spaces while reviewing developers code and our pre-define global code formatting rule always follow in our remote central repository.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
