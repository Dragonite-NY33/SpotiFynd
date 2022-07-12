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

function LeaderBoard(props) {
  // props.players = [
  //   { player: 'player1', score: 35 },
  //   { player: 'player2', score: 29 },
  //   { player: 'player3', score: 46 },
  // ];
  // const players = [];
  // for (let i = 0; i < props.players.length; i++) {
  //   players.push(
  //     <Tr>
  //       <Td>{props.players[i].player}</Td>
  //       <Td isNumeric>{props.players[i].score}</Td>
  //     </Tr>
  //   );
  // }
  const playerss = [
    { player: 'player1', score: 35 },
    { player: 'player2', score: 29 },
    { player: 'player3', score: 46 },
    { player: 'player4', score: 6 },
    { player: 'player5', score: 18 },
    { player: 'player6', score: 23 },
  ];
  const players = [];
  for (let i = 0; i < playerss.length; i++) {
    if (playerss[i].player !== 'player2') {
      players.push(
        <Tr>
          <Td>{playerss[i].player}</Td>
          <Td isNumeric>{playerss[i].score}</Td>
        </Tr>
      );
    } else {
      players.push(
        <Tr bg='yellow.200'>
          <Td>{playerss[i].player}</Td>
          <Td isNumeric>{playerss[i].score}</Td>
        </Tr>
      );
    }
  }
  // players.sort((a, b) => a.score - b.score);

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
            <Th fontSize='18'>Player</Th>
            <Th isNumeric fontSize='18'>
              Score
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Array of players - name + score */}
          {players}
          {/* <Tr>
            <Td>{props.player}</Td>
            <Td isNumeric>{props.score}</Td>
          </Tr> */}
          {/* <Tr>
            <Td>player2</Td>
            <Td isNumeric>30</Td>
          </Tr>
          <Tr>
            <Td>player3</Td>
            <Td isNumeric>3</Td>
          </Tr>
          <Tr bg='yellow.400'>
            <Td>player4</Td>
            <Td isNumeric>3</Td>
          </Tr>
          <Tr>
            <Td>player5</Td>
            <Td isNumeric>3</Td>
          </Tr> */}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default LeaderBoard;
