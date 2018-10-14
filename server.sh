echo "Serving Phoneix Admin"
env -i git pull origin master;
npm install;
npm run build;
serve -s build;