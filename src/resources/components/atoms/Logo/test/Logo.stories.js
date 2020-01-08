import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../assets/icon/style.css';
import Logo from '../Logo';


storiesOf('atoms|Logo', module).add('default', () => (
    <Logo/>
))