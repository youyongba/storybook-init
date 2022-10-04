import React from 'react'
import Button from './Button';

export default {
      title: 'Button',
      component: Button,
}

export const Primary = () => <Button veriant="primary">Primary</Button>
export const Secondary = () => <Button veriant="secondary">Secondary</Button>

export const Success = () => <Button veriant="success">Success</Button>

export const Danger = () => <Button veriant="danger">Danger</Button>
