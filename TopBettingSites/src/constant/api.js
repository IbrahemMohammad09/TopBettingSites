const URL = "https://www.betbonus24.com/";

const Api = {
    GET: {
        Categories: `${URL}api/requests/`,
        Sites: `${URL}api/pictures/`,
        SitesByCategory: `${URL}api/rates/`,
        Articles: URL+'api/rates/all',
    },
    POST: {
        CREATEORDER: `${URL}api/requests/create/`,
        CREATEPICTURE: `${URL}api/pictures/create/`,
        LOGIN: `${URL}api/admin/login/`,
        CREATERATE: URL+'api/rates/create/',
    },
    DELETE: (id) => ({
        DELETEORDER: `${URL}api/requests/${id}/delete/`,
        DELETEPICTURE: `${URL}api/pictures/${id}/delete/`,
        DELETERATE: `${URL}api/rates/${id}/delete/`
    }),
    PUT: (id) => ({
        UPDATEORDER: `${URL}api/requests/${id}/update/`,
        UPDATERATE: `${URL}api/rates/${id}/update/`
    })
};

export  { URL, Api };
