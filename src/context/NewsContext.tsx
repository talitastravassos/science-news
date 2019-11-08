import React from "react";
import axios from "axios";

// global application state definition
interface State {
  news: any;
  baseURL: string;
}

// definition of type IContext used by context api
interface IContext {
  state: State;
  action: {
    getNews(): void;
  };
}

export const NewsContext = React.createContext({} as IContext); // create context

// class with the data and operations stored in context api that the application will consume
export default class NewsProvider extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      news: {},
      baseURL: "https://news-serve-api.herokuapp.com/api/news/"
    };
  }

  getNews = (page: number = 1) => {
    axios.get(`${this.state.baseURL}${page}`).then(res => {
      // console.log(res)
      this.setState({ news: res.data });
    });
  };

  componentDidMount() {
    this.getNews();
  }

  render() {
    // definition of the data and operations that the entire application will have access
    const value = {
      state: { ...this.state },
      action: {
        getNews: this.getNews
      }
    };

    return <NewsContext.Provider value={value} {...this.props} />;
  }
}