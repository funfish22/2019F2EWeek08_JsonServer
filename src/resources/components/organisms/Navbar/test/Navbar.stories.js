import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import Navbar from '../Navbar';


storiesOf('organisms|Navbar', module).add('default', () => (
    <Navbar>123</Navbar>
))