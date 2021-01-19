import apiRequest from "~/utils/apiRequest";

export const state = () => ({
  postsTop: [],
  postsFeatured: [],
  postsOpinion: [],
  postsTech: [],
  postsStrategy: [],
  postAuthors: [],
  postsByAuthors: [],
  topBrokers: []
});

export const mutations = {
  SET_TOP: (state, payload) => (state.postsTop = payload),
  SET_FEATURED: (state, payload) => (state.postsFeatured = payload),
  SET_OPINION: (state, payload) => (state.postsOpinion = payload),
  SET_TECH: (state, payload) => (state.postsTech = payload),
  SET_STRATEGY: (state, payload) => (state.postsStrategy = payload),
  SET_AUTHORS: (state, payload) => (state.postAuthors = payload),
  SET_POSTS_FOR_EACH_AUTHOR: (state, payload) =>
    (state.postsByAuthors = payload),
  SET_TOP_BROKERS: (state, payload) => (state.topBrokers = payload)
};

export const actions = {
  async getPostsTop({ commit }) {
    const res = await apiRequest.get(
      `posts/?key=${process.env.ghost_key}&filter=tag:top`
    );
    if (res.data) commit("SET_TOP", res.data.posts);
  },

  async getPostsFeatured({ commit }) {
    const res = await apiRequest.get(
      `posts/?key=${process.env.ghost_key}&filter=featured:true`
    );
    if (res.data) commit("SET_FEATURED", res.data.posts);
  },

  async getPostsOpinion({ commit }) {
    const res = await apiRequest.get(
      `posts/?key=${process.env.ghost_key}&filter=tag:mnenia`
    );
    if (res.data) commit("SET_OPINION", res.data.posts);
  },

  async getPostsTech({ commit }) {
    const res = await apiRequest.get(
      `posts/?key=${process.env.ghost_key}&filter=tag:tekhnologhii`
    );
    if (res.data) commit("SET_TECH", res.data.posts);
  },

  async getPostsStrategy({ commit }) {
    const res = await apiRequest.get(
      `posts/?key=${process.env.ghost_key}&filter=tag:strategii`
    );
    if (res.data) commit("SET_STRATEGY", res.data.posts);
  },

  async getPostAuthors({ commit }) {
    const res = await apiRequest.get(`authors/?key=${process.env.ghost_key}`);
    if (res.data) commit("SET_AUTHORS", res.data.authors);
  },

  async getPostsByAuthor({ commit }, author) {
    const res = await apiRequest.get(
      `posts/?key=${process.env.ghost_key}&filter=author:${author}&include=authors`
    );
    if (res.data) commit("SET_POSTS_FOR_EACH_AUTHOR", res.data.posts);
  }

  // async getTopBrokers({ commit }) {
  //   const res = await apiRequest.get(`ManageCompanys`);
  //   if (res.data)
  //   	commit('SET_TOP_BROKERS', res.data);
  // }

  // async subscribeToAuthor({ commit }, id) {
  //   const res = await apiRequest.get()
  // }
};
