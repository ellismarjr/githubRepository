import React from 'react';
import PropTypes from 'prop-types';
import { Browser } from './styles';

export default function Repository({ navigation }) {
  console.log(navigation);
  // const repository = navigation.getParam('repository');

  return <Browser />;
}

// Repository.propTypes = {
//   navigation: PropTypes.shape({
//     getParam: PropTypes.func,
//   }).isRequired,
// };

// Repository.navigationOptions = ({ navigation }) => ({
//   title: navigation.getParam('repository').name,
// });
