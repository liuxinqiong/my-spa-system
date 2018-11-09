import ajax from '@/utils/ajax'
import { TODO } from './url'

export default {
    create(data) {
        return ajax({
            method: 'POST',
            data: data,
            url: TODO.CREATE
        })
    },
    updateOne(data) {
        return ajax({
            method: 'POST',
            data: data,
            url: TODO.UPDATEONE
        })
    },
    update(data) {
        return ajax({
            method: 'POST',
            data: data,
            url: TODO.UPDATE
        })
    },
    list() {
        return ajax({
            method: 'GET',
            url: TODO.LIST
        })
    }
}