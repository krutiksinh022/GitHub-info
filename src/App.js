import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './component/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      
        
          <ColorModeSwitcher justifySelf="flex-end" />
           <Home/>
        
      
    </ChakraProvider>
  );
}

export default App;
