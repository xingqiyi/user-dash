import request from '../utils/request';
import { PHOTO_PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  return request(`/api/photos?_page=${page}&_limit=${PHOTO_PAGE_SIZE}`);
}

export function remove(id) {
  return request(`/api/photos/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/api/photos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/photos', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
