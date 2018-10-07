const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let friends = [
  {
    id: 0,
    name: 'Tom',
    address: '0x0000000000000000000000000000000000000000'
  }
];
server.get('/friends', (req, res) => {
  res.json(friends);
});
let friendID = 1;

server.post('/friends', (req, res) => {
  const { name, address } = req.body;
  const newFriend = { name, address, id: friendID };
  if (!name || !address) {
    return sendUserError(
      'You must include both the address and the name of the receipient',
      res
    );
  }

  const findFriendInfo = friend => {
    return friend.name === name || friend.address === address;
  };
  if (friends.find(findFriendInfo)) {
    return sendUserError(
      `This user already exists within your friends list.`,
      res
    );
  }

  friends.push(newFriend);
  friendID++;
  res.json(friends);
});

server.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;
  const findFriendById = friend => {
    return friend.id === id;
  };
  const foundFriend = friends.find(findFriendById);
  if (!foundFriend) {
    return sendUserError('No Friend found by that ID', res);
  } else {
    if (name) foundFriend.name = name;
    if (age) foundFriend.address = address;
    res.json(friends);
  }
});

server.delete('/friends/:id', (req, res) => {
  const { id } = req.params;
  const foundFriend = friends.find(friend => friend.id == id);

  if (foundFriend) {
    const FriendRemoved = { ...foundFriend };
    friends = friends.filter(friend => friend.id != id);
    res.status(200).json(friends);
  } else {
    sendUserError('No friend by that ID exists in the friend DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
