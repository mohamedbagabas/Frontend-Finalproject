import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  
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

const Contact = () => {
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
              {/* <Image
                borderRadius="lg"
                src="/go.gif" alt="hero-image"
                objectFit="contain" shadow="dark-lg"
              /> */}
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
          {/* <BlogTags tags={['Real estate', 'Product']} /> */}
          <Heading marginTop="1">
            <Link textDecoration="none" color='tomato'>
            Get in touch how you like, the choice is yours.
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color='wi'
            fontSize="lg">
Phone


If you like to hear a voice at the other end, we're there for you with everything you need.

Call 8003055098


Our phone lines are open:
Saturday - Thursday 09:00 AM - 10:00 PM
Friday 2:00 PM - 10:00 PM          </Text >

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

export default Contact;