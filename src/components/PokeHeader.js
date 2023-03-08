import { Flex, Text, Input } from '@chakra-ui/react';

export default function PokeHeader({ onSearch }) {
	const search = (event) => {
		onSearch(event.target.value);
	};

	return (
		<>
			<Flex justifyContent="space-between" alignItems="flex-end">
				<Flex flexDirection="column" w="50%">
					<Text as="h1" fontSize="24px">
						Pokedex
					</Text>
					<Text>
						Search for Pokémon by using the name or their National Pokédex
						number
					</Text>
				</Flex>
				<Input w="400px" placeholder="Search by name" onInput={search}></Input>
			</Flex>
		</>
	);
}
