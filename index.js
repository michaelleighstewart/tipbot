const Discord = require('discord.js');
const client = new Discord.Client();

const mysqlx = require('@mysql/xdevapi');

const config = {
    password: '8Isc4IaP6vuIpAw3LzfU',
    user: 'admin',
    host: 'tipping-db.cpghamdpwimb.us-west-2.rds.amazonaws.com',
    port: 3306,
    schema: 'tipping'
};

mysqlx
    .getSession(config)
    .then(session => {
        console.log(session.inspect());
        console.log('connected to mysql server!');
    });


client.on('ready', () => {
    console.log('logged in as ${client.user.tag}');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong :Smug:');
    }
});

client.login('Njc4NjkyNjE2Mzc1NzYyOTQ1.XkmgFw.v8sryazvJucArLbVfNvl3_6D-QE');