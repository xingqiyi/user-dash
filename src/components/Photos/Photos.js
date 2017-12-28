import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import { PHOTO_PAGE_SIZE } from '../../constants';


function Photos({ dispatch, list, total, page: currentPage }) {
  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/photos',
      query: { page },
    }));
  }

  return (
    <div>


      {
        list.map((item) => {
          return (
            <li key={item.id}>
              <span style={{ display: 'inline-block', width: 30 }}>{item.id}</span>
              <img alt="dd" src={item.thumbnailUrl} style={{ height: 50, marginLeft: 5 }} />
              <p>{item.title}</p>
            </li>
          );
        })
      }

      <Pagination
        total={total}
        current={currentPage}
        pageSize={PHOTO_PAGE_SIZE}
        onChange={pageChangeHandler}
      />


    </div>
  );
}


function mapStateToProps(state) {
  const a = state.photos;
  // return {
  //   a: 11,
  // };
  const { list, total, page } = state.photos;
  return {
    loading: state.loading.models.photos,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Photos);
