import { http } from './configApi'

export default {

    findAllCollaborator: () => {
        return http.get('collaborators')
    },
    insertBreakfast: (breakfast) => {
        return http.post('collaborators', breakfast)
    },
    updateBreakfast: (breakfast) => {
        return http.put('collaborators', breakfast)
    },
    deleteBreakfast: (breakfast) => {
        return http.delete('collaborators', { data: breakfast })
    }
}