# Nlang

The prototype of Nlang Scripting Language, packed with intellisense code editor, autocomplete, real-time error checking, and implemented with a real language parser!

## Documentation

For full documentation regarding the project, please visit the [website]() of the project. The complete, user-facing documentation is on that website and it describes everything about this project, starting from the reason why this project is created, the background, all features, how to use the grammar, the API and how to use it, and even the live code editor! For now, this `README.md` file consists of only developer-related documentation.

## Requirements

To run **just the website**, you need the following software packages:

- [Node.js 18+](https://nodejs.org/en)
- [Yarn Classic](https://classic.yarnpkg.com/lang/en/)

To play around with the grammar and probably recompile it, you need these extra software packages:

- [Python 3.11+ (recommended)](https://www.python.org/)
- [ANTLR4 Tools](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)

## Development (Application)

- After making sure that you already have the required software packages, please clone the repository.

```bash
$ node --version
v18.16.0

$ yarn --version
1.22.19

git clone git@github.com:lauslim12/nlang.git
```

- Install the application.

```bash
yarn
```

- Run the application in development mode.

```bash
yarn dev
```

- If you want to build and start in production mode, you can use these commands.

```bash
yarn build
yarn start
```

- Some additional commands exist to help with the development, such as `yarn clean` to clean the build artifacts, `yarn test` to run all of the integration tests, and `yarn quality-check` to make sure that the code is following the standards. There are some more commands, so please feel free to check the `package.json` file.

- That's it! Enjoy!

## Development (Language)

- It is assumed that you have cloned the repository to your local machine.

- You may need OpenJDK if you wish to compile the language. Please see the documentation for ANTLR4 for more information regarding that scenario.

- Create a Python Virtual Environment in this repository.

```bash
python3 -m venv .venv
```

- Switch to the Python Virtual Environment.

```bash
source .venv/bin/activate
```

- Install ANTLR4.

```bash
pip install antlr4-tools
```

- Play around and do some experiments with the grammar file (`nlang/lang/nlang.g4`) in the [ANTLR Lab](http://lab.antlr.org/), and then compile when you are ready!

```bash
antlr4 -Dlanguage=TypeScript ./nlang/lang/nlang.g4
```

- After you are done, you can deactivate your virtual environment and enjoy the new grammar!

```bash
deactivate
```

## Notes

- It is intentional that there is a `@ts-ignore` in each of the generated Nlang TypeScript files. For some reason, the generated files work, but they fail the TypeScript checks.

## License

This application is licensed under MIT License.
