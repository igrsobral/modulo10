import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import './config/ReactotronConfig';

import Routes from './routes';
// import { Container } from './styles';

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7151c1" />
      <Routes />
    </>
  );
}
