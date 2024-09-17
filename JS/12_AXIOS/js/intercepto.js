//reqiosisão
postFetch.interceptors.request.use(
    function (config) {
        console.log("Antes da requisicao...");
        return config;

    }, function (err){
        return Promise.reject(err);
    }
)
//resposta
postFetch.interceptors.response.use(
    function (response) {
        console.log("Depois da resposta...");
        return response;

    }, function (err){
        return Promise.reject(err);
    }
)