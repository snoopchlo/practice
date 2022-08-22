package.json: information about your node.js project in texts
scripts: allow you to run multiple commands at once
dependencies: pacakges for your project to run
devDependencies: packages for developer to program (not saved in node_modules)

-if you pass the pacakge.json file to someone else, if the person runs "npm i" all the packages will installed automatically
-npm install -> npm is going to look at the dependencies and devDependencies and install all of them for you at once
-> no need to share node_modules folder

presets (in babel.config.json): allows us to use the latet js
