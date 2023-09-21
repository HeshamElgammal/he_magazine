import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";
import { EntityKeys } from "src/redux/keys";
import { RootState } from "../store";
import { initialState } from "./types";
import thunks from "./thunks";



const slice = createSlice({
    name: EntityKeys.APP,
    initialState: initialState,
    reducers: {
        logout: () => initialState,
        changeCategoryIndex: (state, action) => { state.categoryIndex = action.payload },
        changeArticleIndex: (state, action) => { state.articleIndex = action.payload},
        changeSelectedArticleIndex: (state, action) => { state.selectedArticleIndex = action.payload },
        changeIssueImages: (state, action) => { state.IssueImages = action.payload },
        changeAllIssues: (state, action) => { state.AllIssues = action.payload },
        changeExploreData: (state, action) => { state.ExploreData = action.payload },
        changeNextPage: (state, action) => { state.NextPage = action.payload },
        changePDF: (state, action) => { state.PDF = action.payload },
    },
    extraReducers(builder) {
        //getSingleArticle
        builder.addCase(thunks.getSingleArticle.fulfilled, (state, action) => {
            state.singleArticle = action.payload?.data;
        });
        builder.addCase(thunks.getSingleArticle.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getIssueDetail
        builder.addCase(thunks.getIssueDetail.fulfilled, (state, action) => {
            state.Issues = action.payload?.data;
        });
        builder.addCase(thunks.getIssueDetail.rejected, (state, action: any) => {
            if (action.payload.data.message == 'Unauthenticated.') {
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }

        });
        //getAllArticles
        builder.addCase(thunks.getAllArticles.fulfilled, (state, action) => {
            state.AllArticles = action.payload?.data;
        });
        builder.addCase(thunks.getAllArticles.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getHomeMag
        builder.addCase(thunks.getHomeMag.fulfilled, (state, action) => {
            state.HomeMag = action.payload?.data;
        });
        builder.addCase(thunks.getHomeMag.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getAllIssues
        builder.addCase(thunks.getAllIssues.fulfilled, (state, action) => {
            state.AllIssues = state.AllIssues.concat(action.payload.data.data)
            {
                action.payload?.data?.data?.length == 15
                    && (state.NextPage = (action.payload.data.pagination?.current_page) + 1)
            }
        });
        builder.addCase(thunks.getAllIssues.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getExploreMag
        builder.addCase(thunks.getExploreMag.fulfilled, (state, action) => {
            state.ExploreMag = action.payload?.data;
        });
        builder.addCase(thunks.getExploreMag.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getHomeCategories
        builder.addCase(thunks.getHomeCategories.fulfilled, (state, action) => {
            state.HomeCategories = action.payload?.data;
        });
        builder.addCase(thunks.getHomeCategories.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getHomeCategoriesData
        builder.addCase(thunks.getHomeCategoriesData.fulfilled, (state, action) => {
            state.ExploreData = action.payload?.data;
        });

        //getExploreArticles
        builder.addCase(thunks.getExploreArticles.fulfilled, (state, action) => {
            state.ExploreData = state.ExploreData.concat(action.payload.data.data)
            {
                action.payload?.data?.data?.length == 15
                    && (state.NextPage = (action.payload.data.pagination?.current_page) + 1)
            }
        });
        builder.addCase(thunks.getExploreArticles.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getFeaturedArticles
        builder.addCase(thunks.getFeaturedArticles.fulfilled, (state, action) => {
            state.ExploreData = state.ExploreData.concat(action.payload.data.data)
            {
                action.payload?.data?.data?.length == 15
                    && (state.NextPage = (action.payload.data.pagination?.current_page) + 1)
            }
        });
        builder.addCase(thunks.getFeaturedArticles.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getLatestArticles
        builder.addCase(thunks.getLatestArticles.fulfilled, (state, action) => {
            state.ExploreData = state.ExploreData.concat(action.payload.data.data)
            {
                action.payload?.data?.data?.length == 15
                    && (state.NextPage = (action.payload.data.pagination?.current_page) + 1)
            }
        });
        builder.addCase(thunks.getLatestArticles.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getSelectedArticles
        builder.addCase(thunks.getSelectedArticles.fulfilled, (state, action) => {
            state.ExploreData = state.ExploreData.concat(action.payload.data.data)
            {
                action.payload?.data?.data?.length == 15
                    && (state.NextPage = (action.payload.data.pagination?.current_page) + 1)
            }
        });
        builder.addCase(thunks.getSelectedArticles.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getFavoriteArticles
        builder.addCase(thunks.getFavoriteArticles.fulfilled, (state, action) => {
            state.FavData = action.payload?.data;
        });
        builder.addCase(thunks.getFavoriteArticles.rejected, (state, action: any) => {
            if (action.payload.data.message == 'Unauthenticated.') {
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });
    },
})
export const selectAllArticles = (state: RootState) => state.app.AllArticles
export const selectHomeMag = (state: RootState) => state.app.HomeMag
export const selectExploreMag = (state: RootState) => state.app.ExploreMag
export const selectIssueDetail = (state: RootState) => state.app.Issues
export const selectFavData = (state: RootState) => state.app.FavData
export const selectHomeCategories = (state: RootState) => state.app.HomeCategories
export const selectExploreData = (state: RootState) => state.app.ExploreData
export const selectCategoryIndex = (state: RootState) => state.app.categoryIndex
export const selectArticleDetail = (state: RootState) => state.app.singleArticle
export const selectArticleIndex = (state: RootState) => state.app.articleIndex
export const selectSelectedArticleIndex = (state: RootState) => state.app.selectedArticleIndex
export const selectIssueImages = (state: RootState) => state.app.IssueImages
export const selectNextPage = (state: RootState) => state.app.NextPage
export const selectAllIssues = (state: RootState) => state.app.AllIssues
export const selectPDF = (state: RootState) => state.app.PDF
const App = {
    slice,
    changeCategoryIndex: slice.actions.changeCategoryIndex,
    changeArticleIndex: slice.actions.changeArticleIndex,
    changeSelectedArticleIndex: slice.actions.changeSelectedArticleIndex,
    changeIssueImages: slice.actions.changeIssueImages,
    changeAllIssues: slice.actions.changeAllIssues,
    changeExploreData: slice.actions.changeExploreData,
    changeNextPage: slice.actions.changeNextPage,
    changePDF:slice.actions.changePDF,
}
export default App