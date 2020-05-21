const Discord= require('discord.js');
require('dotenv').config();
const cron= require('cron');
const client= new Discord.Client();
const channelId=process.env.channelId;
client.once('ready', () => {
   console.log('Ready!');
    client.channels.cache.get(channelId).send(`Test <@&${process.env.roleId}>`);
});

const zoomLinks= new Map();
zoomLinks['romana']=process.env.romana;
zoomLinks['pudak']=process.env.pudak;
zoomLinks['flav']=process.env.flav;
zoomLinks['fizica']=process.env.fizica;
zoomLinks['bio']=process.env.bio;
zoomLinks['tic']=process.env.tic;
zoomLinks['engleza']=process.env.engleza;
zoomLinks['geografie']=process.env.geografie;
zoomLinks['sport']=process.env.sport;
zoomLinks['chimie']=process.env.chimie;
zoomLinks['arta']=process.env.arta;
zoomLinks['muzica']=process.env.muzica;
zoomLinks['istorie']=process.env.istorie;
zoomLinks['turca']=process.env.turca;
zoomLinks['baltarica']=process.env.baltarica;

//console.log(zoomLinks);
function test() {
    client.channels.cache.get(channelId).send(`Test <@&${process.env.roleId}>`);
}
function avetiRomana() {
    let mess='<@&${process.env.roleId}> In doua minute aveti Romana \nJoin Here: ' + zoomLinks['romana'];
    client.channels.cache.get(channelId).send(mess);
}
function avetiOra(ora, ora2) {
    let mess="";
    if(typeof(ora2)!='undefined') {
        mess='<@&${process.env.roleId}> In doua minute aveti '+ora +' sau ' + ora2 + '. \nJoin Here: ' + zoomLinks[ora] + ' or here: '+zoomLinks[ora2];
    } else
        mess='<@&${process.env.roleId}> In doua minute aveti '+ora+ '.  \nJoin Here: ' + zoomLinks[ora];
    client.channels.cache.get(channelId).send(mess);
}
let ora1Luni= new cron.CronJob('00 58 8 * * 1', ()=>avetiOra('romana'), undefined, true, "Europe/Athens");
let ora2Luni= new cron.CronJob('00 58 9 * * 1', ()=>avetiOra('pudak'), undefined, true, "Europe/Athens");
let ora3Luni= new cron.CronJob('00 58 10 * * 1', ()=>avetiOra('pudak'), undefined, true, "Europe/Athens");
let ora4Luni= new cron.CronJob('00 58 11 * * 1', ()=>avetiOra('flav', 'pudak'), undefined, true, "Europe/Athens");
let ora5Luni= new cron.CronJob('00 58 12 * * 1', ()=>avetiOra('flav', 'pudak'), undefined, true, "Europe/Athens");
let ora6Luni= new cron.CronJob('00 58 13 * * 1', ()=>avetiOra('flav', 'pudak'), undefined, true, "Europe/Athens");

let ora1Marti= new cron.CronJob('00 58 8 * * 2', ()=>avetiOra('flav', 'baltarica'), undefined, true, "Europe/Athens");
let ora2Marti= new cron.CronJob('00 58 9 * * 2', ()=>avetiOra('flav', 'baltarica'), undefined, true, "Europe/Athens");
let ora3Marti= new cron.CronJob('00 58 10 * * 2', ()=>avetiOra('flav', 'baltarica'), undefined, true, "Europe/Athens");
let ora4Marti= new cron.CronJob('00 58 11 * * 2', ()=>avetiOra('flav', 'baltarica'), undefined, true, "Europe/Athens");
let ora5Marti= new cron.CronJob('00 58 12 * * 2', ()=>avetiOra('fizica'), undefined, true, "Europe/Athens");
let ora6Marti= new cron.CronJob('00 58 13 * * 2', ()=>avetiOra('pudak'), undefined, true, "Europe/Athens");

let ora1Miercuri= new cron.CronJob('00 58 8 * * 3', ()=>avetiOra('romana'), undefined, true, "Europe/Athens");
let ora2Miercuri= new cron.CronJob('00 58 9 * * 3', ()=>avetiOra('bio'), undefined, true, "Europe/Athens");
let ora3Miercuri= new cron.CronJob('00 58 10 * * 3', ()=>avetiOra('tic'), undefined, true, "Europe/Athens");
let ora4Miercuri= new cron.CronJob('00 58 11 * * 3', ()=>avetiOra('flav', 'pudak'), undefined, true, "Europe/Athens");
let ora5Miercuri= new cron.CronJob('00 58 12 * * 3', ()=>avetiOra('flav', 'pudak'), undefined, true, "Europe/Athens");
let ora6Miercuri= new cron.CronJob('00 58 13 * * 3', ()=>avetiOra('flav', 'pudak'), undefined, true, "Europe/Athens");

let ora1Joi= new cron.CronJob('00 58 8 * * 4', ()=>avetiOra('engleza'), undefined, true, "Europe/Athens");
let ora2Joi= new cron.CronJob('00 58 9 * * 4', ()=>avetiOra('geografie'), undefined, true, "Europe/Athens");
let ora3Joi= new cron.CronJob('00 58 10 * * 4', ()=>avetiOra('sport'), undefined, true, "Europe/Athens");
let ora4Joi= new cron.CronJob('00 58 11 * * 4', ()=>avetiOra('chimie'), undefined, true, "Europe/Athens");
let ora5Joi= new cron.CronJob('00 58 12 * * 4', ()=>avetiOra('romana'), undefined, true, "Europe/Athens");
let ora6Joi= new cron.CronJob('00 58 13 * * 4', ()=>avetiOra('arta', 'muzica'), undefined, true, "Europe/Athens");

let ora1Vineri= new cron.CronJob('00 58 8 * * 5', ()=>avetiOra('romana'), undefined, true, "Europe/Athens");
let ora2Vineri= new cron.CronJob('00 58 9 * * 5', ()=>avetiOra('istorie'), undefined, true, "Europe/Athens");
let ora3Vineri= new cron.CronJob('00 58 10 * * 5', ()=>avetiOra('turca'), undefined, true, "Europe/Athens");
let ora4Vineri= new cron.CronJob('00 58 11 * * 5', ()=>avetiOra('engleza'), undefined, true, "Europe/Athens");
let ora5Vineri= new cron.CronJob('00 58 12 * * 5', ()=>avetiOra('fizica'), undefined, true, "Europe/Athens");

//let nenenene= new cron.CronJob('00 14 18 * * 1', ()=>avetiOra('romana', 'pudak'), undefined, true, "Europe/Athens");
client.login(process.env.TOKEN);