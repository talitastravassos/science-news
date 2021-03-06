import React from "react";
import axios from "axios";
import { News } from "./news.types";

// global application state definition
interface State {
  news: News[];
  currentPage: number;
  baseURL: string;
  loading: boolean;
  titlePage: string;
  currentCategory: string;
}

// definition of type IContext used by context api
interface IContext {
  state: State;
  action: {
    getNews(page?: number): void;
    getCategory(page?: number): void;
    setCategory(category: string, title: string): void;
  };
}

export const NewsContext = React.createContext({} as IContext); // create context

// class with the data and operations stored in context api that the application will consume
export default class NewsProvider extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      news: [],
      baseURL: "https://news-serve-api.herokuapp.com/api/news/",
      currentPage: 1,
      loading: true,
      titlePage: "LATEST NEWS ABOUT SCIENCE",
      currentCategory: ""
    };
  }

  getNews = (page: number = 1) => {
    this.setState({ loading: true });
    axios.get(`${this.state.baseURL}${page}`).then(res => {
      // console.log(res)
      if (!res.data.data) {
        this.setState({ loading: false });
        this.getNews(this.state.currentPage + 2);
      } else {
        this.setState({
          news: res.data.data,
          currentPage: res.data.page,
          loading: false
        });
      }
    });
  };

  setCategory = (category: string, title: string) => {
    this.setState({
      currentCategory: category,
      titlePage: title
    });

    this.getCategory();
  };

  getCategory = (page: number = 1) => {
    const { currentCategory } = this.state;

    this.setState({ loading: true });
    axios
      .get(`${this.state.baseURL}category/${currentCategory}/${page}`)
      .then(res => {
        // console.log(res)
        if (!res.data.data) {
          this.setState({
            loading: false
          });
          // this.getCategory(this.state.currentPage + 2);
        } else {
          this.setState({
            news: res.data.data,
            currentPage: res.data.page,
            loading: false
          });
        }
      });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    // definition of the data and operations that the entire application will have access
    const value = {
      state: { ...this.state },
      action: {
        getNews: this.getNews,
        getCategory: this.getCategory,
        setCategory: this.setCategory
      }
    };

    return <NewsContext.Provider value={value} {...this.props} />;
  }
}
