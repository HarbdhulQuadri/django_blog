    import React from 'react';
    
    function ArticleList(props){
        return (
            <div>
                {props.articles && props.articles.map(article=> {
                    return (
                        <div>
                            <h1> {article.title} </h1>
                            <p> {article.description} </p>
                        </div>
                )
            })}
            </div>
        )
    }
    export default ArticleList