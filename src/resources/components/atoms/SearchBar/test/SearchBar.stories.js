import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import '../../../../assets/icon/style.css';
import SearchBar from '../SearchBar';


storiesOf('atoms|SearchBar', module).add('default', () => (
    <SearchBar/>
))