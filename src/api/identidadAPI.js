export function IdentidadAPI(user, password) {

    //this.CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    this.CORS_PROXY = 'https://desolate-fortress-91736.herokuapp.com/'; // custom proxy
    //this.CORS_PROXY = ''; // NO CORS
    //this.WS_URL_USERINFO = 'https://janovasformacion.unizar.es/identidad/api/bibliotecas/datosUsuario/';
    //this.WS_URL_USERLIST = 'https://janovasformacion.unizar.es/identidad/api/bibliotecas/usuarios/'
    this.WS_URL_USERINFO = 'https://identidad.unizar.es/api/bibliotecas/datosUsuario/';
    this.WS_URL_USERLIST = 'https://identidad.unizar.es/api/bibliotecas/usuarios/'; 
    // ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    this.WS_USER = user; 
    this.WS_PWD = password


    /**
     * Get User List
     *  If no 'since' date is provided, defaults to 1999-01-01
     */
    this.getUsers = async function (since = new Date(1999, 0, 1)) {

        const WS_URL_USERLISTFROM = `${this.WS_URL_USERLIST}${since.getFullYear()}-${since.getMonth()+1}-${since.getDate()}`

        console.log('Fetching users list from ' + this.CORS_PROXY + WS_URL_USERLISTFROM)
        return fetch(this.CORS_PROXY + WS_URL_USERLISTFROM, 
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


    /**
     * Get User List
     */
    this.getUserInfo = async function (nip) {
        console.log('Fetching user info from ' + this.CORS_PROXY  + this.WS_URL_USERINFO + nip)
        return fetch(this.CORS_PROXY + this.WS_URL_USERINFO + nip, 
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
