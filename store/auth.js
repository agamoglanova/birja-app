import apiRequest from '~/utils/apiRequestIlham'

export const state = () => ({
    token: /* localStorage.getItem('user-token') || */ '',
    status: '',
    user: null
});

export const getters = {
    isAuthenticated: (state) => {
        if (state.token.length > 0) {
            return true
        }
        return false
    },
    authStatus: state => state.status,
};

export const mutations = {
    SET_LOADING: (state) => {
        state.status = 'loading'
    },
    AUTH_SUCCESS: (state, token) => {
        state.status = 'success'
        state.token = token
    },
    AUTH_ERROR: (state) => {
        state.status = 'error'
    },
    SET_USER: (state, payload) => {
        state.user = payload
    },
    AUTH_LOGOUT: (state) => {
        state.user = null
        state.token = ''
    }
};

export const actions = {
    async login({commit, dispatch}, user) {
        commit('SET_LOADING')
        await apiRequest.post('auth/login', JSON.stringify(user)).then(resp => {
            const token = resp.data.access_token
            localStorage.setItem('user-token', token)
            commit('AUTH_SUCCESS', token)
            dispatch('getUser')
        })
    },
    async register({commit, dispatch}, user) {
        commit('SET_LOADING')
        await apiRequest.post('auth/signup', JSON.stringify(user)).then(resp => {
            const token = resp.data.access_token
            localStorage.setItem('user-token', token)
            commit('AUTH_SUCCESS', token)
            dispatch('LogIn', {email: user.email, password: user.password});
        })
    },
    async getUser({commit}) {
        const data = await apiRequest.get('auth/profile')
        commit('SET_USER', data.data);
    },
    async logout({commit}) {
        commit('AUTH_LOGOUT')
        localStorage.removeItem('user-token')
    }
};
