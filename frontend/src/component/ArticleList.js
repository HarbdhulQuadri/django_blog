    import React from 'react';
    
    function ArticleList(props){
        return (
            <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
 <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                                                Codehunter's  <br /><span class="text-blue-600">Blog</span></h1>
                {props.articles && props.articles.map(article=> {
                    return (
                        
                        <div className='p-8 container mx-auto' key={article.id}>
    

                            <h1 className='font-bold text-2xl my-1'> {article.title} </h1>
                            <p className='text-gray-600 text-xl'> {article.description} </p>
                            <hr className='post-line'/>
                            <div className='row'>
                                <div>

                                </div>

                            </div>
                        </div>
                        
                )
            })}
            </div>
        )
    }


export default ArticleList
