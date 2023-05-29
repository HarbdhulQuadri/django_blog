import React, { useEffect, useState } from 'react';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import APIService from './APIService';

function Form(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const UpdateArticle = async () => {
       APIService.UpdateArticle(props.article.id, { title, description })
       .then(resp=> props.updatedInformation(resp ))
       setTitle('')
       setDescription('')
      }
      const InsertArticle = async () => {
        APIService.InsertArticle(props.article.id, { title, description })
        .then(resp=> props.insertedInformation(resp ))
        setTitle('')
        setDescription('')
       }      
      

    useEffect(() => {
        setTitle(props.article.title);
        setDescription(props.article.description);

    }, [props.article]
    )

    return (
        // <div>
        //     {props.article ? (<div>
        //         <form >
        //             <div className='w-full p-2 mr-4 rounded-md  mb-2'>
        //                 <Label>Title</Label>
        //                 <TextInput
        //                  


        //                 />
        //             </div>

        //             <div className='w-full p-2 mr-4 rounded-md  mb-2'>
        //                 <Label>Description</Label>
        //                 <Textarea
        //                     value={description}
        //                 />
        //             </div>
        //             <br />
        //             {props.article.id ?
        //                 <Button

        //                     type="submit">Update</Button>

        //                 :
        //                 <Button type="submit">POST</Button>

        //             }


        //             {/* <Button type="submit">Post</Button> */}
        //         </form> 
        //     </div>) : null}

        // </div>
        <div>
            <div> {props.article ? (
            <div className='col-md-7'>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <label htmlFor='title'> Title</label>
                        <input type='text' className='form-control' value={title} placeholder='Enter your Post Title' onChange={e=> setTitle(e.target.value)}/>

                    </div>


                </div>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <label htmlFor='description'> Description</label>
                        <input type='text' cols="10" rows="5" value={description} className='form-control' placeholder='Enter your Post' onChange={e=> setDescription(e.target.value)} />

                    </div>


                </div>
                <br />
                {props.article.id ? 
                 <button onClick={UpdateArticle} className='btn btn-success'> Update </button>
                 :
                 <button  onClick={InsertArticle}className='btn btn-primary'> Post </button>}
               
            </div>) : null}


            </div>

        </div>
    );
}

export default Form;
