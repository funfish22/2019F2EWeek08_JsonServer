import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import NewFolder from '../NewFolder';


storiesOf('molecules|NewFolder', module).add('default', () => (
    <NewFolder>123</NewFolder>
))