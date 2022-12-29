class Axios {
    constructor() {

    }

    get(url) {
        let myPromise = new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', url)
            req.onload = () => {
                if (req.status == 200) {
                    resolve(req.response);
                } else {
                    reject('url not found')
                }
            }
            req.send();
        })
        return myPromise;
    }
}

const axios = new Axios();

axios.get('https://jsonplaceholder.typicode.com/posts').then(value => { console.log(value) })