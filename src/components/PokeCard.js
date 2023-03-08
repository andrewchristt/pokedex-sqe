import { Flex, Text, Input } from '@chakra-ui/react';

export default function PokeCard({ name, url, index, onOpenDetail }) {
	const openDetail = () => {
		onOpenDetail(url);
	};

	return (
		<>
			<Flex
				key={index}
				borderRadius="12px"
				border="1px solid red"
				alignItems="center"
				justifyContent="space-between"
				p="0 16px"
				w="25%"
				cursor="pointer"
				h="100px"
				onClick={openDetail}
			>
				<Flex flexDirection="column">
					<Text>#{index}</Text>
					<Text>{name}</Text>
				</Flex>
				<Flex w="40px" h="40px" flex-shrink="0" border="1px solid red"></Flex>
			</Flex>
		</>
	);
}
