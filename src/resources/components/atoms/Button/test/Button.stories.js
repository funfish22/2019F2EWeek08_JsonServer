import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../Button';

storiesOf('Atoms|Button', module).add('default', () => (
    <>
        <Button>cancel</Button>
        <Button theme="primary" type="submit">ADD</Button>
    </>
));
