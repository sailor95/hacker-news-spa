import { actionTypes } from './acitons';

const getInitState = () => ({
    theme: 'dark',
});

const app = (state = getInitState(), { type, payload }) => {
    switch (type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                ...payload,
            };
        default: {
            return state;
        }
    }
};

export default app;