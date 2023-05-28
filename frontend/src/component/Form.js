import React, { useEffect, useState } from 'react';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import APIService from './APIService';

function Form(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const UpdateArticle = () => {
        APIService.UpdateArticle(props.article.id, { title, description })
            .then(resp => console.log(resp.json()))
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
 
            <div className='col-md-6'>
                <div className='forn-group'>
                    <label htmlFor='title'> Title</label>
                    <input type='text' class Name='form-control' placeholder='Enter your Post Title' />

                </div>


            </div>
            <div className='col-md-6'>
                <div className='forn-group'>
                    <label htmlFor='description'> Description</label>
                    <input type='text' cols="30" rows="5" className='form-control' placeholder='Enter your Post' />

                </div>


            </div>
            <br/>
            <button className='btn btn-primary'> Submit </button>
        </div>
    );
}

export default Form;
