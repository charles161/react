
class DataApi {
  constructor(rawdata){
    this.rawdata=rawdata;
  }
  mapArraystoObjects(arr){
    return arr.reduce((acc,cur) => {
      acc[cur.id]=cur;
      return acc;
    },{});
  }
  getArticles(){
    return this.mapArraystoObjects(this.rawdata.articles);
  }
  getAuthor(){
    return this.mapArraystoObjects(this.rawdata.authors);

  }

}

export default DataApi;