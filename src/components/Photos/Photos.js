import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';


function Photos() {
  return (
    <div>
            adf
        </div>
  );
}


function mapStateToProps(state) {
  const { list, total, page } = state.photos;
  return {
    loading: state.loading.models.photos,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Photos);
