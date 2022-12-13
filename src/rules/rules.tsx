import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="green" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">

      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Rules = () => {
  return (
    <Container  maxW={'7xl'} p="12">
      <Box
      
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src="/go.gif" alt="hero-image"
                objectFit="contain" shadow="dark-lg"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Real estate', 'Product']} />
          <Heading marginTop="1">
            <Link textDecoration="none" color='tomato'>
            Who can Own Property in Saudi Arabia? 
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color='wi'
            fontSize="lg">
                Who can Own Property in Saudi Arabia?

Gulf Cooperation Council (‘GCC’) nationals and GCC companies (with shareholders who are all GCC nationals) have certain rights to own land, subject to a number of restrictions. A GCC company or a GCC national may lease or purchase land to use it to conduct any licensed business activity from the land, and may own residential properties in Saudi Arabia, except for properties within the vicinity of Mecca and Medina.
Foreigners (being non-GCC nationals or companies who are not 100 percent owned by GCC nationals) have certain rights to own land and property in Saudi Arabia. The Foreign Ownership of Real Estate Regulation (enacted by Royal Decree No. M/15 dated 17/04/1421H, corresponding to 19 July 2000) regulates the acquisition by foreign, non-GCC nationals, of real estate in Saudi Arabia. Under this regulation, the ownership and investment in real estate by a foreign investor is permitted, subject to obtaining a foreign investment licence from the Saudi Arabian General Investment Authority (‘SAGIA’).
A non-GCC development company may, subject to certain licencing conditions by SAGIA, own real estate in connection with a particular project for property development provided that the construction of buildings is for investment purposes (whether through sale or lease), and is carried out by a Saudi Arabia licensed contractor.
          </Text >

        </Box>
      </Box>


      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
 

         
           
          </Box>
        </WrapItem>
      </Wrap>

    </Container>
  );
};

export default Rules;