import { mockData } from '../mock-data';

export const setData = () => {
    return { type: 'SET_DATA', payload: mockData }
}