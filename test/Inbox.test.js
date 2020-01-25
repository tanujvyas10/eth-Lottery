const assert =require("assert")
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3= new Web3(ganache.provider());//reference of web3
const {interface, bytecode}= require("../compile")
let accounts;
let Inbox;
const INITIAL_STRING= "hi there!"
beforeEach(async ()=>{
    //Get a list of all accounts
    //  web3.eth.getAccounts()
    //  .then(fetchAccounts=>{
    //      console.log(fetchAccounts)
    //  })
    accounts = await web3.eth.getAccounts()
      
   //use one of those accounts to deploy the contract
  Inbox = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({ data: bytecode, arguments:['hi there!'] })
   .send({from : accounts[0], gas:'1000000' })
})

describe('Inbox',()=>{
    it('deploy a contract',()=>{
           //console.log(accounts)
         //  console.log(Inbox)
        assert.ok(Inbox.options.address)
    })

    it('has a default message',async ()=>{
       const message = await Inbox.methods.message().call()
       assert.equal(message, INITIAL_STRING)
    })

    it('can change the message',async ()=>{
     await Inbox.methods.setMessage('bye').send({from : accounts[0] }) 
        const message = await Inbox.methods.message().call()
        assert.equal(message,'bye')
    })
})    



















// class Car{
//     park(){
//         return 'stopped';
//     }
//     drive(){
//         return 'wroon';
//     }
// }

// let car;
// beforeEach(()=>{
// //console.log('a')
//   car = new Car()
// })

// describe('Car class',()=>{
//     it('can park',()=>{
//         const car = new Car()
//         assert.equal(car.park(),'stopped');
//     })
//     it('can drive',()=>{
//         const car = new Car()
//         assert.equal(car.drive(),'wroon');
//     })
// })


