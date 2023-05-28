    import React from 'react';
    import { Button } from 'flowbite-react';
    
    function ArticleList(props){
        const editBtn=(article)=>{
            props.editBtn(article)

        }
        return (
            <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
        <h1 className="text-5xl md:text-6xl  xl:text-7xl font-bold tracking-tight mb-12" >
                     Codehunter's  <br /><span className="text-blue-600">Blog</span></h1>
                {props.articles && props.articles.map(article=> {
                    return (
                        
                        <div className='p-8 container mx-auto' key={article.id}>
    <div className='col-md-1'>
                                    <Button> CREATE POST </Button>

                                </div> 

                            <h1 className='font-bold text-2xl my-1'> {article.title} </h1>
                            <p className='text-gray-600 text-xl'> {article.description} </p>
                            <hr className='post-line'/>
                            <div className='flex flex-auto'>
                                <div className='col-md-1'>
                                    <Button color="light" onClick={()=> editBtn(article)}>UPDATE </Button>

                                </div> 
                                <div>
                                    <Button color='failure' > DELETE </Button>
                                    

                                </div>

                            </div>
                        </div>
                        
                )
            })}
            </div>
        )
    }


export default ArticleList
