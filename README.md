# firstBot
Un bot Discord en javascript

Inspiré d'un site web que je ne retrouve plus :(

This is a modular Discord bot on javascript.

Use config.json.sample to create config.json. You'll have to put your Discord token. You can choose the prefix for commands.

To install :
- install node : yum install nodejs
- install npm : yum install npm
- install git : yum install git
- clone project : git clone https://github.com/pguinet/firstBot.git
- copy system/firstbot.service to /etc/systemd/system
- download requesite modules : npm i
- Set index.js executable : chmod +x index.js

Start service : systemctl enable --now firstbot

