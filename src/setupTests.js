import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "@testing-library/jest-dom";

import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

configure({ adapter: new Adapter() });
