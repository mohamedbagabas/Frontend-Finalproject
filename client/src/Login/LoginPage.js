"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_router_dom_1 = require("react-router-dom");
function SplitScreen() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<react_1.Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
      <react_1.Flex p={8} flex={1} align={'center'} justify={'center'}>
        <react_1.Stack spacing={4} w={'full'} maxW={'md'}>
          <react_1.Heading fontSize={'2xl'}>Sign in to your account</react_1.Heading>
          <react_1.FormControl id="username">
            <react_1.FormLabel>UserName</react_1.FormLabel>
            <react_1.Input type="username"/>
          </react_1.FormControl>
          <react_1.FormControl id="password">
            <react_1.FormLabel>Password</react_1.FormLabel>
            <react_1.Input type="password"/>
          </react_1.FormControl>
          <react_1.Stack spacing={6}>
            <react_1.Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
            </react_1.Stack>
            <react_1.Button colorScheme={'blue'} variant={'solid'}>
              Login
            </react_1.Button>
            <p>don't have an account? you can register</p>
            <react_1.Button colorScheme={'blue'} variant={'solid'} onClick={(e) => {
            navigate('/register');
        }}>
             Register
  
            </react_1.Button>
          </react_1.Stack>
        </react_1.Stack>
      </react_1.Flex>
      <react_1.Flex flex={1}>
        <react_1.Image marginRight={'1000px'} paddingTop={'210px'} width={'50%'} height={'40%'} alt={'Login Image'} objectFit={'cover'} src={'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'}/>
      </react_1.Flex>
    </react_1.Stack>);
}
exports.default = SplitScreen;
