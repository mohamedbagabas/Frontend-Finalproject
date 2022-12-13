"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
function Buildinginfo() {
    return (<react_1.Center py={6}>
        <react_1.Box maxW={'270px'} w={'full'} bg={(0, react_1.useColorModeValue)('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
          
          <react_1.Flex justify={'center'} mt={-12}>
            <react_1.Avatar size={'xl'} src={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'} css={{
            border: '2px solid white',
        }}/>
          </react_1.Flex>
  
          <react_1.Box p={6}>
            <react_1.Stack spacing={0} align={'center'} mb={5}>
              <react_1.Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Name:
              </react_1.Heading>
              <react_1.Text paddingTop={'20px'} color={'gray.500'}>No.Apartment:</react_1.Text>

              <react_1.Text color={'gray.500'}>Location:</react_1.Text>
            </react_1.Stack>
  
            <react_1.Stack direction={'row'} justify={'center'} spacing={6}>
              <react_1.Stack spacing={0} align={'center'}>
                
                <react_1.Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </react_1.Text>
              </react_1.Stack>
              <react_1.Stack spacing={0} align={'center'}>
                <react_1.Text fontWeight={600}>23k</react_1.Text>
                <react_1.Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </react_1.Text>
              </react_1.Stack>
            </react_1.Stack>
          </react_1.Box>
        </react_1.Box>
      </react_1.Center>);
}
exports.default = Buildinginfo;
