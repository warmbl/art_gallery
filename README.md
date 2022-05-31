# Boilerplate for learning HTML, CSS and JS

Use this boilerplate for your HTML + CSS + JS pet projects. I recommend using this repo in VS Code for better experience.

## How to install

1. Install recommended version of [Node](https://nodejs.org/).
2. Check that Node was installed: open terminal in VS Code and use `node -v` command. If everything is fine, you will see Node version as output. For example: `v14.17.5`
3. Check that npm was installed too: open terminal in VS Code and use `npm -v` command. If everything is fine, you will see Node version as output. For example: `8.3.2`
4. Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) via npm: use `npm install --global yarn` command.
5. Clone or download this repo.
6. Run `yarn` in the root directory of this repo.
7. Enjoy your codding :з

## Scripts

-   `yarn fix`: format your HTML, CSS and JS with Prettier
-   `yarn lint`: lint JS files manually

## Recommended VS Code extensions

<table>
    <tbody>
        <tr>
            <td style="text-align: center" align="center">
                <img style="width: 120px" src="https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.2.3/1642067257652/Microsoft.VisualStudio.Services.Icons.Default">
            </td>
            <td>
                <b>ESLint</b> by Microsoft. Makes ESLint watch your files automatically in VS Code.
            </td>
        </tr>
        <tr>
            <td style="text-align: center" align="center">
                <img style="width: 120px" src="https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/9.5.0/1648513363698/Microsoft.VisualStudio.Services.Icons.Default">
            </td>
            <td>
                <b>Prettier - Code formatter</b> by Prettier. Allows Prettier to work in VS Code.
            </td>
        </tr>
        <tr>
            <td style="text-align: center">
                <img style="width: 200px" src="https://mkaufman.gallerycdn.vsassets.io/extensions/mkaufman/htmlhint/0.10.0/1601775133813/Microsoft.VisualStudio.Services.Icons.Default">
            </td>
            <td>
                <b>HTMLHint</b> by Mike Kaufman. Underlines problematic HTML and hints you what to do with it. 
            </td>
        </tr>
    </tbody>
</table>

## Format code on save in VS Code

There is a rule in `.vscode/settings.json` that force Prettier format your code when you save an updated .html, .css or .js file. If it doesn't work, follow this instruction:

1. Make sure you have installed a Prettier extension.
2. In a .js, .html or .css file, use this hotkeys combination: `CTRL` + `SHIFT` + `P`.
3. Select `Format Document`
4. Select `Configure Default Formatter...`
5. Select `Prettier - Code formatter`
