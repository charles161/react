import React from 'react';

const Articles = (props) => {
  const {articles,authors} = props;
  return Object.values(articles).map((a) => {

    return (
      <div key={a.id}>
        <h3 >{a.title}</h3>
        
        < a href = {
          authors[a.authorId].website
        }>

          < h4 > {
            authors[a.authorId].firstName + ' ' + authors[a.authorId].lastName
          } </h4>

        </a>

        <p>{a.body}</p>
      </div>
    );
  });
};

export default Articles;