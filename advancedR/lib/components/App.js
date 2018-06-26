import React,{Component} from 'react';
import DataApi from '../DataApi';
import {data} from '../testdata';
import Articles from './Articles';
const api = new DataApi(data);

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      articles:api.getArticles(),
      authors:api.getAuthor()
    };
    console.log(this.state);
  }
  render(){
    return <Articles articles={this.state.articles} authors={this.state.authors}/>;
  }
}

export default App;

