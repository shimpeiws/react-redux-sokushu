import { Map, Record } from 'immutable'

const _IssueListManager = Record({
  loading: false,
})

export default class IssueListManager extends _IssueListManager {
}

export const SORT_TYPE = {
  UPDATED: {
    key: 'updated',
    name: '更新時間順'
  },
  UPDATED_REVERSE: {
    key: 'updated_reverse',
    name: '更新時間の古い順'
  },
  ID: {
    key: 'id',
    name: '新しい順'
  },
  ID_REVERSE: {
    key: 'id_reverse',
    name: '古い順'
  },
  TITLE: {
    key: 'title',
    name: '名前順'
  },
  TITLE_REVERSE: {
    key: 'title_reverse',
    name: '名前の逆順'
  }
}
