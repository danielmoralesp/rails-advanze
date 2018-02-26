pragma solidity ^0.4.18;

contract Contrato {
  string public message;

  function Contrato(string initialMessage) public {
    message = initialMessage;
  }

  function setMessage(string newMessage) public {
    message = newMessage;
  }
}
