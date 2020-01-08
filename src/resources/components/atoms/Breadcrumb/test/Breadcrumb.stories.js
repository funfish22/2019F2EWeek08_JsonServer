import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import Breadcrumb from '../Breadcrumb';

const source = [
    {
        id: 0,
        title: 'starred'
    },
    {
        id: 1,
        title: 'trash'
    }
]

storiesOf('atoms|Breadcrumb', module).add('default', () => (
    <Breadcrumb source={source}/>
))