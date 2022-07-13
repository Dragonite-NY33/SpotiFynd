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
  players.sort((a, b) => a.score - b.score);

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
