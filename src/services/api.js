import { http } from './configApi'

export default {

    findAllCollaborator: () => {
        return http.get('collaborators')
    },
    insertBreakfast: (breakfast) => {
        return http.post('collaborators', breakfast)
    }
}