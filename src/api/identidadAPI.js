export function IdentidadAPI(user, password) {

    this.CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    this.WS_URL = 'https://janovasformacion.unizar.es/identidad/api/bibliotecas/datosUsuario';
    this.WS_USER = user; 
    this.WS_PWD = password


    /**
     * Get User List
     */
    this.getUsers = async function () {
        console.log('Fetching users from ' + this.WS_URL)
        return fetch(this.CORS_PROXY + this.WS_URL, 
              { method:'GET', 
                headers: {'Authorization': 'Basic ' + btoa(`${this.WS_USER}:${this.WS_PWD}`)}
            })
        .then(response => {
            console.log('Response', response) //dev
            if (response.ok)
                return response.json()
            else {
                console.error(`Something went bad... Identidad API response status: ${response.status}`)
                return []
            }  
        }).catch(error => {
            console.log(error);
        })
        /*.then(json => {
            console.log(json)
        });*/
    }

}