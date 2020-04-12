import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
})

export const insertDevice = payload => api.post(`/device`, payload)
export const getAllDevices = () => api.get(`/devices`)
export const updateDeviceById = (id, payload) => api.put(`/device/${id}`, payload)
export const deleteDeviceById = id => api.delete(`/device/${id}`)
export const getDeviceById = id => api.get(`/device/${id}`)

const apis = {
    insertDevice,
    getAllDevices,
    updateDeviceById,
    deleteDeviceById,
    getDeviceById,
}

export default apis