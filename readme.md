This proof of concept was structured to simulate a project where the components were
being pulled in as a library.  The concept itself would also work from inside a single
prject, you would need to take the concepts presented here and mostly just change the imports
to work with your build scripts.

# Running the Demo
Run the launch-demo script for your OS (.bat or .sh)

## Troubleshooting
If for some reason the script doesn't work, here are the steps to build manually

1. In ioc_root
npm install
npm run build
2. In looks_real
npm install
npm run build
3. In napkin_sketch
npm install
npm run build
4. In test-project
npm install
npm start