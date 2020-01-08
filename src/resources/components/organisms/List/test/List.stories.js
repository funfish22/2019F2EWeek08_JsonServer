import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import '../../../../assets/icon/style.css';
import List from '../List';


storiesOf('organisms|List', module).add('default', () => (
    <List/>
))