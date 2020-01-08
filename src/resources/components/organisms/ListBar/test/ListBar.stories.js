import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import ListBar from '../ListBar';


storiesOf('organisms|ListBar', module).add('default', () => (
    <ListBar>files</ListBar>
))