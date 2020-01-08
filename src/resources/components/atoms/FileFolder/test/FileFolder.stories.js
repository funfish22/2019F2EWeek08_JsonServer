import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import '../../../../assets/icon/style.css';
import FileFolder from '../FileFolder';


storiesOf('atoms|FileFolder', module).add('default', () => (
    <FileFolder>advertisement</FileFolder>
))