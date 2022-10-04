import React from 'react';
import { Button } from '@chakra-ui/react';
import {action, actions} from '@storybook/addon-actions'
import {text, boolean, color } from '@storybook/addon-knobs'

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: {
        colorScheme: { control: 'color' },
        children: { control: 'text' },
        onClick: {
            action: 'clicked',
        }
    },
    
};

const Template = (args) => <Button {...args} />;

// export const Orange = Template.bind({});

// Orange.args = {
//     colorScheme: 'orange',
//     children: 'orange',
// };

// export const Blue = Template.bind({});
// Blue.args = {
//     colorScheme: 'blue',
//     children: 'blue',
// };



// export const Orange = () => <Button colorScheme='orange'>Orange</Button>;
// export const Danger = () => <Button colorScheme="red">Danger</Button>;

// https://chakra-ui.com/getting-started


export const Orange = () => <Button onClick={action('Click handle')} colorScheme='orange'>Orange</Button>;
export const Danger = () => <Button {...actions('onClick', 'onMouseOver')} colorScheme="red">Danger</Button>;
export const Yellow = () => <Button  onClick={()=>{
    console.log('Button clicked');
}}  colorScheme="yellow">Yellow</Button>;


// knobs

const label = 'ColorScheme';
const defaultValue = '#ff00ff';
const groupId = 'GROUP-ID1';

// const value = color(label, defaultValue, groupId);

export const Knobs1 = () => <Button disabled={boolean('Disabled', false)} colorScheme="blue" style={{backgroundColor:color(label, defaultValue, groupId)}}>{text('Label1', 'Knobs Label',groupId)}</Button>;
// export const Knobs1 = () => <Button disabled={boolean('Disabled', false)} colorScheme={color(label, defaultValue, groupId)}>{text('Label1', 'Knobs Label',groupId)}</Button>;