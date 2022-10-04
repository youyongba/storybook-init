import React from 'react'
import Button from './Button';
// import Center from '../Center/index';
export default {
      title: 'form/Button',
      component: Button,
    //   decorators: [(story) => <Center>{story()}</Center>],
      args: {
        children:'Button'
      }
}

export const Primary = () => <Button veriant="primary">Primary</Button>
export const Secondary = () => <Button veriant="secondary">Secondary</Button>

export const Success = () => <Button veriant="success">Success</Button>

export const Danger = () => <Button veriant="danger">Danger</Button>

const Template = (args) => <Button {...args} />

export const PrimaryA = Template.bind({})

PrimaryA.args = {
        veriant: 'primary',
        children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {

        ...PrimaryA.args,
        children: 'Long Primary Args'
}



export const SecondaryA = Template.bind({})
SecondaryA.args = {

        veriant: 'secondary',
        children: 'Secondary Args'
}

