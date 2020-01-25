// pragma solidity ^0.6.1;
// contract Inbox{

//      string public message;
//     constructor(string memory initialMessage) public {
//        message = initialMessage;
//     }
//     function setMessage(string memory newMessage) public {
//        message = newMessage;
//     }
// }
pragma solidity ^0.4.17;
contract Inbox{
    string public message;
    function Inbox(string initialMessage) public {
          message = initialMessage;
    }
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}