const path=require('path');
const fs= require('fs')

const solc=require("solc")
const inboxPath=path.resolve(__dirname,'contracts','inbox.sol') 
const source = fs.readFileSync(inboxPath,'UTF-8');

//console.log(solc.compile(source,1).contracts[':Inbox'])
module.exports=solc.compile(source,1).contracts[':Inbox'];//no of constracts we try to compile (here it is one)