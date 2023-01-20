import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from '../../shared/CenterView/CenterView';
import Button from './Button';

storiesOf('Button', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('with text', () => (
        <Button onClick={action('clicked-text')}>
            <Text>{text('Button text', 'Hello Button')}</Text>
        </Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked-emoji')} label="">
            <Text>😀 😎 👍 💯</Text>
        </Button>
    ));