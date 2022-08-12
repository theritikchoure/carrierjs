/*!
 * Carrier.js
 * v0.0.1 - 2022-08-12
 * (c) Ritik Chourasiya;  License
 * Created by: Ritik Chourasiya
 */

! function(a, b) {
    "use strict";
    let cache = JSON.parse(localStorage.getItem('carrierCache'));

    let appendScript = function(res) {
        var c = b.head || b.getElementsByTagName("head")[0];
        var d = b.createElement("script");
        d.defer = !0, d.text = res.response, c.appendChild(d)
    };

    a.carrier = {
        get: function(url) {
            let promise = new Promise(async (resolve, reject) =>{
                let req = new XMLHttpRequest();
                req.responseType = 'text';
                req.open("GET", url);

                req.send();

                req.onload = () => {
                    const res = {
                        config: '',
                        response: eval(req.response),
                        headers: req.getAllResponseHeaders(),
                        request: req.readyState,
                        url: req.responseURL,
                        status: req.status,
                        type: options?.type || 'json'
                    }

                    resolve(res)
                }

                req.onreadystatechange = () => {
                    if(req.readyState === 4 && req.status === 404) {
                        // TODO
                    }
                }
            });

            return promise;
        },
        script: function(url) {
            let promise = new Promise(async (resolve, reject) =>{
        
                if(cache && cache.hasOwnProperty(url)) {
                    const res = cache[url];
                    if(res.status === 200) {
                        appendScript(res);
                        resolve(res.response)
                    }
                    resolve(res)
                } else {

                    const req = new XMLHttpRequest();
                    req.responseType = 'text';

                    req.open("GET", url);
                    req.onload = () => {
                        const res = {
                            config: '',
                            response: req.response,
                            headers: req.getAllResponseHeaders(),
                            request: req.readyState,
                            url: req.responseURL,
                            status: req.status,
                            type: 'script'
                        }
        
                        if(cache === null) {
                            cache = {};
                            cache[url] = res
                            localStorage.setItem('carrierCache', JSON.stringify(cache));
                        }

                        cache[url] = res        
                        localStorage.setItem('carrierCache', JSON.stringify(cache));

                        if(res.status === 200) {
                            appendScript(res);
                            resolve(res.response)
                        }
        
                        resolve(res)
                    }
                    req.send();
                }
        
            })
        
            return promise;
        },
    }

}(this, document);