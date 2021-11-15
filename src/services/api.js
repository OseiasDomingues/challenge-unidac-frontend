import { http } from './configApi'

export default {

    findAllCollaborator: () => {
        return http.get('collaborators')
    }
}