import * as React from "react"
import { addDecorator, configure } from '@storybook/react';
import {MemoryRouter} from "react-router-dom"

configure(require.context('../src', true, /\.stories\.tsx$/), module)
addDecorator(storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>);
