import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Highlight,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function LeaderBoard(props) {
  const location = useLocation();
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((res) => res.json())
      .then((data) => {
        console.log('This is leaderboard data: ', data);
        setPlayerList(data);
      })
      .catch((err) => console.log('Error fetching leaderboard data'));
  }, []);

  const playerss = [
    { player: 'player1', score: 35 },
    { player: 'player2', score: 29 },
    { player: 'player3', score: 46 },
    { player: 'player4', score: 6 },
    { player: 'player5', score: 18 },
    { player: 'player6', score: 23 },
    // { player: location.state.user, score: 43 },
  ];
  const players = [];
  for (let i = 0; i < playerss.length; i++) {
    if (playerss[i].player !== 'player2') {
      players.push(
        <Tr>
          <Td>{i + 1}</Td>
          <Td>{playerss[i].player}</Td>
          <Td isNumeric>{playerss[i].score}</Td>
        </Tr>
      );
    } else {
      players.push(
        <Tr bg='yellow.200'>
          <Td>{i + 1}</Td>
          <Td>{playerss[i].player}</Td>
          <Td isNumeric>{playerss[i].score}</Td>
        </Tr>
      );
    }
  }
  players.sort((a, b) => a.score - b.score);
  // console.log(players);

  return (
    <TableContainer
      w={'25vw'}
      mt='10'
      bg='white'
      borderColor='black'
      borderRadius={10}
      p={5}
    >
      <Table variant='striped' colorScheme='lightgrey'>
        <Thead>
          <Tr>
            <Th isNumeric fontSize='18'>
              Rank
            </Th>
            <Th fontSize='18'>Player</Th>
            <Th isNumeric fontSize='18'>
              Score
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {players}
          {/* <Tr>
            <Td>{props.player}</Td>
            <Td isNumeric>{props.score}</Td>
          </Tr> */}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default LeaderBoard;
