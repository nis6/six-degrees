import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
        position: 'relative',
        margin: '0',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        userSelect: 'none',
      },
      ':: -webkit - scrollbar': {
        display: 'none'
      },
      '*, *: before, *: after': {
        boxSizing: 'border-box',
        padding: '0',
        margin: '0'
      },
      a: {
        color: 'teal.500',
        _hover: {
          bg: 'whiteAlpha.500',
        },
      },
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

