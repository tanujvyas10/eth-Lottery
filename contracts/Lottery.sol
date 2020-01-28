pragma solidity ^0.4.17;

contract Lottery {
address public manager;
address[] public players;

 function Lottery() public {
     manager= msg.sender;
 }
 
function enter() public payable {//expect some ether
        require(msg.value >  0.01 ether );
        
    players.push(msg.sender);
} 

function random() private view returns  (uint){
    return uint(keccak256(block.difficulty, now, players));//sha3
       
}

function pickWinner() public restricted {
    //   require(msg.sender == manager);
      
    uint index = random()% players.length;
    players[index].transfer(this.balance); //0x325334723823423etc
    players = new address[](0);
        
}

modifier restricted() {
    require(msg.sender == manager);
    _;//means run all the code after that
}

function getPlayers() public view returns (address[]) {
       return players;    
}

 }
// contract Test{
//     uint[] public myArray;
    
//     function Test() public{
//         myArray.push(1);
//         myArray.push(10);
//         myArray.push(39);
//     }
    
//     function getMyArray() public view returns (uint[]){
//       return myArray;   
//     }
    
//     function getArrayLength() public view returns (uint){
//         return myArray.length;
        
//     }
    
//     function getFirstElement() public view returns (uint){
//         return myArray[0];
//     } 
// }