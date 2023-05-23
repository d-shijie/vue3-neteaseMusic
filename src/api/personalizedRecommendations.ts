import { request } from '@/util/request'

// 获取banner
export function getBannerApi (type: 0 | 1 | 2 | 3) {
  return request({
    url: "/banner",
    method: 'get',
    params: {
      type
    }
  })
}
// 推荐歌单
export function getDaylyRecommendPlaylistApi () {
  return request({
    url: "/recommend/resource",
    method: 'get',
  })
}
// 热门播客 电台个性推荐
export function getHotDjRecommendApi () {
  return request({
    url: "/personalized/djprogram",
    method: 'get',
  })
}