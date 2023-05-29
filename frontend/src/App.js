import './App.css';
import Footer from './component/Footer';
import ArticleList from './component/ArticleList';
import { useEffect, useState } from 'react';
import Nav from './component/NavBar';
import Hero from './component/Hero';
import Form from './component/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState('')
  const [deleteArticle, setDeleteArticle] = useState('')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '23f04ed279f19deef54365fc24d83d25746b0f32',
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error));
  }, []);

  const editBtn = (article) => {
    setEditArticle(article)
  }
 
  const updatedInformation = (article)=>{
    const new_article= articles.map(myarticle=>{
      if (myarticle.id===article.id){
        return article 
      }else{
        return myarticle
      }
    })
    setArticles(new_article)
  }
   
  const deleteBtn = (article)=>{
    const new_article= articles.filter(myarticle=>{
      if (myarticle.id===article.id){
        return false 
      }
        return true
      
    })
    setArticles(new_article)
  }
  const articleForm=()=>{
    setEditArticle({title:"",description:""})
  }
  const insertedInformation = (article) => {
    const new_articles = [...articles,article]
    setArticles(new_articles)
  } 


  return (
    <div>
      <Nav />
      <Hero />
      <br/>
      <div className='row'>
      <div className='col'>
<button className='btn btn-primary' onClick={articleForm}> CREATE POST</button>
                        </div>
                        </div>
      <ArticleList articles={articles} editBtn={editBtn}  deleteBtn={deleteBtn}/>
      <Form article={editArticle}  updatedInformation={updatedInformation} insertedInformation={insertedInformation}/>
      <Footer />

    </div>
  );
}

export default App;
