/*!
 * Carrier.js
 * v0.0.1 - 2022-08-12
 * (c) Ritik Chourasiya;  License
 * Created by: Ritik Chourasiya
 */

! function(a, b) {
    "use strict";
    let cache = JSON.parse(localStorage.getItem('carrierCache'));

    a.carrier = {
        get: function(url, options) {
            let promise = new Promise(async (resolve, reject) =>{
        
                if(cache && cache.hasOwnProperty(url)) {
                    const res = cache[url];
                    if(res.type === 'script') {
                        var c = b.head || b.getElementsByTagName("head")[0];
                        var d = b.createElement("script");
                        d.defer = !0, d.text = res.response, c.appendChild(d)
                        eval(res.response);
                        resolve(res.response)
                    }
                    resolve(res)
                } else {

                    const req = new XMLHttpRequest();
                    req.responseType = 'json'
                    if(options?.type) {
                        if(options.type === 'script') {
                            req.responseType = 'text'
                        }
                    }

                    req.open("GET", url);
                    req.onload = () => {
                        const res = {
                            config: '',
                            response: req.response,
                            headers: req.getAllResponseHeaders(),
                            request: req.readyState,
                            url: req.responseURL,
                            status: req.status,
                            type: options?.type || 'json'
                        }
        
                        if(cache === null) {
                            cache = {};
                            cache[url] = res
                            localStorage.setItem('carrierCache', JSON.stringify(cache));
                        }

                        cache[url] = res        
                        localStorage.setItem('carrierCache', JSON.stringify(cache));
        
                        if(res.type === 'script') {
                            eval(res.response);
                            resolve(res.response)
                        }
                        resolve(res)
                    }
                    req.send();
                }
        
            })
        
            return promise;
        },
        script: function(url, options) {
            let myScript = document.createElement("script");
            myScript.setAttribute("src", url);
            myScript.setAttribute("async", "false");

            let head = document.head;
            head.insertBefore(myScript, head.firstElementChild);
        }
    }

}(this, document);