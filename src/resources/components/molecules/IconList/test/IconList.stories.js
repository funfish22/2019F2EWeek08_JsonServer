import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import '../../../../assets/icon/style.css';
import IconList from '../IconList';


storiesOf('molecules|IconList', module).add('default', () => (
    <IconList/>
))