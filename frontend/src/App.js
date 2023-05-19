import './App.css';
import ArticleList from './component/ArticleList';
import { useEffect,useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
  fetch('http://127.0.0.1:8000/api/articles/',{
      method: 'GET',
      headers:{
      'Content-Type': 'application/json',
      'Authorization':'23f04ed279f19deef54365fc24d83d25746b0f32',
      }
  })
  .then(resp => resp.json())
  .then(resp => setArticles(resp))
  .catch(error=> console.log(error));
  }, []);

  return (
  <div>
    <ArticleList articles={articles}/>
  </div>
  );
}

export default App;
