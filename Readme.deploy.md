# Install nodejs, pm2
# initial project
- git clone ...
- npm run build
- At the first deploy time: 
    + create index.js: 
        ` const express = require('express');
        const path = require('path');
        const app = express();
        app.use(express.static(path.join(__dirname, 'build')));
        app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
        });
        app.listen(9000);`
    + `pm2 start ./index.js`
# Prerequisites deploy:

- nano /etc/apache2/ports.conf: 
    + add listen port: Listen 81
- nano /etc/apache2/sites-enabled/000-default.conf:
    `
    <VirtualHost *:81>
    ProxyPass "/" "http://localhost:9000/"
    ProxyPassReverse "/" "http://localhost:9000/"

    ServerName localhost
    </VirtualHost>
    `
- sudo ufw allow 81 
- run commands:
    `
    sudo a2enmod proxy
    sudo a2enmod proxy_http
    sudo a2enmod proxy_balancer
    sudo a2enmod lbmethod_byrequests
    sudo systemctl restart apache2
    `
    