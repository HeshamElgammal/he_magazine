import { api } from "../_axios"

const articles = () => api.get('articles')
const homeData = () => api.get('home')
const exploreData = () => api.get('explore')
const homeCategories = () => api.get('categories')
const allIssues = (page: number) => api.get(`issues?page=${page}`)
const exploreArticles = (page: number) => api.get(`explore-articles?page=${page}`)
const latestArticles = (page: number) => api.get(`latest-articles?page=${page}`)
const selectedArticles = (page: number) => api.get(`selected-articles?page=${page}`)
const featuredArticles = (page: number) => api.get(`featured-articles?page=${page}`)
const singleArticle = (id: number) => api.get(`articles/${id}`)
const homeCategoriesData = (data: any) => api.get(`categories/${data}`)
const issueDetail = (id: number) => api.get(`issue/${id}`)


const favoriteArticles = () => api.get('favorite-articles')
const addtoFav = (data: any) => api.post('favorite-articles', { ...data })
const removefromFav = (id: number) => api.delete(`favorite-articles/${id}`)




const AppAPI = {
    articles,
    homeData,
    exploreData,
    homeCategories,
    exploreArticles,
    latestArticles,
    selectedArticles,
    featuredArticles,
    singleArticle,
    homeCategoriesData,
    issueDetail,
    allIssues,

    favoriteArticles,
    addtoFav,
    removefromFav
};

export default AppAPI;
