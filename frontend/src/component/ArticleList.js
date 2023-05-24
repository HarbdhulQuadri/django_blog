    import React from 'react';
    
    function ArticleList(props){
        return (
            <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                {props.articles && props.articles.map(article=> {
                    return (
                        <div className='p-8 container mx-auto' key={article.id}>
                            <h1 className='font-bold text-2xl my-1'> {article.title} </h1>
                            <p className='text-gray-600 text-xl'> {article.description} </p>
                        </div>
                        
                )
            })}
            </div>
        )
    }


export default ArticleList
