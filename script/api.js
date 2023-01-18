const CONFIG_API = {
    url: 'https://cats.petiteweb.dev/api/single/fullcatbox',
    headers: {
        'Content-type': 'application/json'
    }
}

class Api {
    constructor(config){
        this._url = config.url;
        this._headers = config.headers;
    }

    _onResponce(res){
        return res.ok ? res.json() : Promise.reject({...res, message: "Server ERROR"});
    }

    getAllCats(){
        return fetch(`${this._url}/show`, {
            method: 'GET'
        }).then(this._onResponce)
    }


    addNewCat(data){
        return fetch(`${this._url}/add`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: this._headers
        }).then(this._onResponce)
    }

    updateCatById(idCat, data){
        fetch(`${this._url}/update/${idCat}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: this._headers
        })
    }


    getCatById(idCat){
        fetch(`${this._url}/show/${idCat}`, {
            method: 'GET',
        })
    }


    deleteCatById(idCat){
        fetch(`${this._url}/delete/${idCat}`, {
            method: 'DELETE',
        })
    }


}

const api = new Api(CONFIG_API);