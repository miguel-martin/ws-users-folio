export function IdentidadAPI(user, password) {

    this.CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    this.WS_URL = 'https://janovasformacion.unizar.es/identidad/api/bibliotecas/datosUsuario';
    this.WS_USER = user; 
    this.WS_PWD = password


    // Methods...
    this.getUsers = async function () {
        console.log('Fetching users from ' + this.WS_URL)
        return fetch(this.CORS_PROXY + this.WS_URL, 
              { method:'GET', 
                headers: {'Authorization': 'Basic ' + btoa(`${this.WS_USER}:${this.WS_PWD}`)}
            })
        .then(response => response.json())
        .then(json => {
            console.log(json) // dev
            return json;
        });
    }

}