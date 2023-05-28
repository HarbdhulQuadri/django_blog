export default class APIService{
    static UpdateArticle(article_id,body){
        return fetch(`http://127.0.0.1:8000/api/artcicles/${article_id}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'23f04ed279f19deef54365fc24d83d25746b0f32',
            },
            body:JSON.stringify(body)
    })
    .then(resp=>resp.json())
}}