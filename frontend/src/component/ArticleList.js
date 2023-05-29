import React from 'react';
import { Button } from 'flowbite-react';
import APIService from './APIService';

function ArticleList(props) {
    const editBtn = (article) => {
        props.editBtn(article)

    }
    const deleteBtn = (article) => {
        APIService.DeleteArticle(article.id)
        .then(()=> props.deleteBtn(article))
        .catch(error=>console.log(error))

    }
    return (
        <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
            <h1 className="text-5xl md:text-6xl  xl:text-7xl font-bold tracking-tight mb-12" >
                Codehunter's  <br /><span className="text-blue-600">Blog</span></h1>
            {props.articles && props.articles.map(article => {
                return (

                    <div className='p-8 container mx-auto' key={article.id}>
                      

                        <h1 className='font-bold text-2xl my-1'> {article.title} </h1>
                        <p className='text-gray-600 text-xl'> {article.description} </p>
                        <hr className='post-line' />
                        <div className='flex flex-auto'>
                            <div className='col-md-1'>
                                <Button color="light" onClick={() => editBtn(article)}>UPDATE </Button>

                            </div>
                            <div>
                                <Button  onClick={() => deleteBtn(article)} color='failure' > DELETE </Button>


                            </div>

                        </div>
                    </div>

                )
            })}
        </div>
    )
}


export default ArticleList
