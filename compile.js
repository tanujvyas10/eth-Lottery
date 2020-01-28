const path=require('path');
const fs= require('fs')

const solc=require("solc")
const lotteryPath=path.resolve(__dirname,'contracts','Lottery.sol') 
const source = fs.readFileSync(lotteryPath,'UTF-8');
 
//console.log(solc.compile(source,1).contracts[':Inbox'])
module.exports=solc.compile(source,1).contracts[':Lottery'];//no of constracts we try to compile (here it is one)