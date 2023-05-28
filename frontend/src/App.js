import './App.css';
import Footer from './component/Footer';
import ArticleList from './component/ArticleList';
import { useEffect, useState } from 'react';
import Nav from './component/NavBar';
import Hero from './component/Hero';
import Form from './component/Form';




function App() {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState('')
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

  return (
    <div>
      <Nav />
      <Hero />
      <ArticleList articles={articles} editBtn={editBtn} />
      <Form article={editArticle} />
      <Footer />

    </div>
  );
}

export default App;
