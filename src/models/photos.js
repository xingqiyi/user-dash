import * as photosService from '../services/photos';

export default {
  namespace: 'photos',
  state: {
      list: [],
      total: null,
      page: null,
    },
  reducers: {
      save(state, { payload: { data: list, total, page } }) {
          return { ...state, list, total, page };
        },
    },
  effects: {
      *fetch({ payload: { page = 1 } }, { call, put }) {
          const { data, headers } = yield call(photosService.fetch, { page });
          yield put({
              type: 'save',
              payload: {
                  data,
                  total: parseInt(headers['x-total-count'], 10),
                  page: parseInt(page, 10),
                },
            });
        },

      *reload(action, { put, select }) {
          const page = yield select(state => state.photos.page);
          yield put({ type: 'fetch', payload: { page } });
        },
    },
  subscriptions: {
      setup({ dispatch, history }) {
          return history.listen(({ pathname, query }) => {
              if (pathname === '/photos') {
                  dispatch({ type: 'fetch', payload: query });
                }
            });
        },
    },
};
