import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import ToolBar from '../ToolBar';


storiesOf('organisms|ToolBar', module).add('default', () => (
    <ToolBar />
))