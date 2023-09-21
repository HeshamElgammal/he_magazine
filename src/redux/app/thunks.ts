import { createAsyncThunk } from "@reduxjs/toolkit";
import AppAPI from "./api";

const getSingleArticle: any = createAsyncThunk<any, any, any>(
    'app/singleArticle',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.singleArticle(id);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getIssueDetail: any = createAsyncThunk<any, any, any>(
    'app/issueDetail',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.issueDetail(id);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getAllArticles: any = createAsyncThunk<any, any, any>(
    'app/articles',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.articles();
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
const getHomeCategories: any = createAsyncThunk<any, any, any>(
    'app/homeCategories',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.homeCategories();
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getHomeCategoriesData: any = createAsyncThunk<any, any, any>(
    'app/homeCategoriesData',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.homeCategoriesData(data);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getHomeMag: any = createAsyncThunk<any, any, any>(
    'app/homeData',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.homeData();
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getExploreMag: any = createAsyncThunk<any, any, any>(
    'app/exploreData',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.exploreData();
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getExploreArticles: any = createAsyncThunk<any, any, any>(
    'app/exploreArticles',
    async (page, thunkApi: any) => {
        try {
            const response = await AppAPI.exploreArticles(page);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getLatestArticles: any = createAsyncThunk<any, any, any>(
    'app/latestArticles',
    async (page, thunkApi: any) => {
        try {
            const response = await AppAPI.latestArticles(page);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const getFeaturedArticles: any = createAsyncThunk<any, any, any>(
    'app/featuredArticles',
    async (page, thunkApi: any) => {
        try {
            const response = await AppAPI.featuredArticles(page);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getSelectedArticles: any = createAsyncThunk<any, any, any>(
    'app/selectedArticles',
    async (page, thunkApi: any) => {
        try {
            const response = await AppAPI.selectedArticles(page);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getAllIssues: any = createAsyncThunk<any, any, any>(
    'app/allIssues',
    async (page, thunkApi: any) => {
        try {
            const response = await AppAPI.allIssues(page);
            //    alert(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
const getFavoriteArticles: any = createAsyncThunk<any, any, any>(
    'app/favoriteArticles',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.favoriteArticles();
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const addArticleToFav: any = createAsyncThunk<any, any, any>(
    'app/addtoFav',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.addtoFav(data);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const removeArticleFromFav: any = createAsyncThunk<any, any, any>(
    'app/removefromFav',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.removefromFav(id);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
const AppThunks = {
    getAllArticles,
    getSingleArticle,
    getHomeMag,
    getExploreMag,
    getHomeCategories,
    getHomeCategoriesData,
    getExploreArticles,
    getLatestArticles,
    getFeaturedArticles,
    getSelectedArticles,
    getIssueDetail,
    getAllIssues,

    getFavoriteArticles,
    addArticleToFav,
    removeArticleFromFav
};

export default AppThunks;

