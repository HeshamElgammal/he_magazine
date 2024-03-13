interface appState {
    PDF: false,
    NextPage: number
    articleIndex: number;
    selectedArticleIndex: number;
    IssueImages: any[];
    categoryIndex: number;
    AllIssues: [
        {
            id: 0,
            title: "",
            description: "",
            image: "",
            date: '',
            items: []
        }
    ]
    HomeMag: {
        explore_articles: [
            {
                id: 0,
                title: "",
                thumbnail_title: "",
                author: "",
                date: "",
                short_description: "",
                labels: [],
                thumbnail_image: "",
                mobile_image: "",
                category: {
                    name: ""
                },
            }
        ],
        home_articles: [
            {
                id: 0,
                title: "",
                thumbnail_title: "",
                author: "",
                date: "",
                short_description: "",
                labels: [],
                thumbnail_image: "",
                mobile_image: "",
                category: {
                    name: ""
                },
            }
        ],
        issues: [
            {
                id: 0,
                title: "",
                description: "",
                image: ""
            }
        ]
    }
    singleArticle: {
        id: 0,
        title: "",
        thumbnail_title: "",
        content: "",
        category_id: 0,
        author: "",
        date: "",
        short_description: "",
        labels: [],
        thumbnail_image: "",
        mobile_image: "",
        inner_image: "",
        gallery: [],
        related_articles: [{
            id: 0,
            title: "",
            thumbnail_title: "",
            author: "",
            date: "",
            short_description: "",
            labels: [],
            thumbnail_image: "",
            mobile_image: ""
        }]
    };
    ExploreMag: {
        latest: [
            {
                id: 0,
                title: "",
                thumbnail_title: "",
                author: "",
                date: "",
                short_description: "",
                labels: [],
                thumbnail_image: "",
                mobile_image: "",
                category: {
                    name: ""
                },
            }
        ],
        featured: [
            {
                id: 0,
                title: "",
                thumbnail_title: "",
                author: "",
                date: "",
                short_description: "",
                labels: [],
                thumbnail_image: "",
                mobile_image: "",
                category: {
                    name: ""
                },
            }
        ],
        selected: [
            {
                id: 0,
                title: "",
                thumbnail_title: "",
                author: "",
                date: "",
                short_description: "",
                labels: [],
                thumbnail_image: "",
                mobile_image: "",
                category: {
                    name: ""
                },
            }
        ],
    }
    HomeCategories: [
        {
            id: 0,
            name: "",
            order: 0
        },
    ]
    ExploreData: [
        {
            id: 0,
            title: "",
            thumbnail_title: "",
            author: "",
            date: "",
            short_description: "",
            labels: [],
            thumbnail_image: "",
            mobile_image: "",
            category: {
                name: ""
            },
        }
    ]
    FavData: [
        {
            id: 0,
            title: "",
            thumbnail_title: "",
            author: "",
            date: "",
            short_description: "",
            labels: [],
            thumbnail_image: "",
            mobile_image: "",
            category: {
                name: ""
            },
        }
    ]
    Issues: {
        id: 1,
        title: "",
        description: "",
        image: "",
        items: [{
            id: 0,
            type: any,
            image: "",
            index:0,
            model: {
                id: 0,
                title: "",
                image: "",
                thumbnail_title: "",
                content: "",
                category: {
                    name: ""
                },
                author: "",
                date: "",
                category_id: 0,
                short_description: "",
                labels: [],
                thumbnail_image: "",
                mobile_image: "",
                inner_image: "",
                type: any,
                gallery: [],
                action_url: "",
                file: "",
            },
            gallery: [
                {
                    id: 1,
                    image: ""
                },
            ]
        }]
    }
    AllArticles: [
        {
            id: 0,
            title: "",
            thumbnail_title: "",
            author: "",
            date: "",
            short_description: "",
            labels: [],
            thumbnail_image: "",
            mobile_image: "",
            category: {
                name: ""
            },
        }
    ]

}

export const initialState: appState = {
    PDF: false,
    NextPage: 1,
    articleIndex: 0,
    categoryIndex: -1,
    selectedArticleIndex: 0,
    IssueImages: [],
    HomeMag: [],
    ExploreMag: [],
    HomeCategories: [],
    ExploreData: [],
    FavData: [],
    singleArticle: {},
    Issues: {},
    AllArticles: [],
    AllIssues: [],
}