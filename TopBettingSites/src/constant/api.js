const URL = "https://www.betbonus24.com/";

const Api = {
    GET: (id) => ( {
        CATEGORIES: `${URL}api/users/categories/`,
        Sites: `${URL}api/users/sites/`,
        SitesByCategory: `${URL}api/users/sites/by-category/${id}/`,
        Articles: URL+'api/admin/articles/',
        Code: URL+`api/admin/codes/${id}/`
    }),
    POST: {
        LOGIN: `${URL}api/admin/login/`,
        CREATECategories: `${URL}api/admin/categories/`,
        CREATEArticles: `${URL}api/admin/articles/`,
        CREATESites: URL+'api/admin/sites/',
    },
    DELETE: (id) => ({
        DELETECategories: `${URL}api/admin/categories/${id}/`,
        DELETESites: `${URL}api/admin/sites/${id}/`,
        DELETEArticles: `${URL}api/admin/articles/${id}/`
    }),
    PUT: (id) => ({
        UPDATECategories: `${URL}api/admin/categories/${id}/`,
        UPDATEArticles: `${URL}api/admin/articles/${id}/`,
        UPDATESites : `${URL}api/admin/sites/${id}/`
    })
};

export  { URL, Api };
