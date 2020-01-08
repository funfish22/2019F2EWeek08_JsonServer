import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import FolderBlock from '../FolderBlock';


storiesOf('molecules|FolderBlock', module).add('default', () => (
    <FolderBlock />
))