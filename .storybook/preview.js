import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import Center from '../src/components/Center/index';

import {ThemeProvider, theme, CSSReset, Box} from '@chakra-ui/react';
// yarn add -D @storybook/addon-essentials
// import '@storybook/addon-console';
import {withConsole} from '@storybook/addon-console';



// yarn add -D @storybook/addon-docs
// yarn add -D @storybook/addon-knobs


import {withKnobs} from '@storybook/addon-knobs';



// yarn add -D @storybook/addon-viewport
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// yarn add -D @storybook/addon-a11y

import { withA11y } from '@storybook/addon-a11y';

// addDecorator(story => <Center>{story()}</Center>);
addDecorator(story => <ThemeProvider theme={theme}>
    <CSSReset />
  <Box m='4'>{story()}</Box></ThemeProvider>);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withA11y);
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}