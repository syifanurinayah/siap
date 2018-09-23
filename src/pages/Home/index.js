import React from "react";
import Button from '../../components/Button';

const link =
    "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


class Home extends React.Component {
   constructor(props) {
       super(props);
       this.state ={
           isAuthenticated: false,
           list: null,
           keyword: ""
       };
   }

   componentDidMount() {
       this.fetchData();
   }

   fetchData = () => {
       return fetch(link)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    list: res
                });
            });
   };


   handleform = event => {
       this.setState({
           keyword: event.target.value
       });
   };


   render() {
       const listStyle = { marginBottom:10};
       return (
           <div>
               <input onChange={this.handleform} value={this.state.keyword}/>

               {/* <Button size="small" color="blue" onClick={this.handleLogin}>Login</Button>
               <input onChange={this.handleform} value={this.state.name}/> */}

              {this.state.list && 
                this.state.list
                .filter(article=>{
                    return (
                        article.title
                        .toLowerCase()
                        .includes(this.state.keyword.toLowerCase()) ||
                        article.content
                        .toLowerCase()
                        .includes(this.state.keyword.toLowerCase())
                    );
                })
                .map(article => {
                return (
                    <div key={article.id}>
                        <strong>{article.title}</strong>
                        <p>
                        {article.content}
                        </p>
                    </div>)
            })}
           </div>
       );
     }
    
   }

export default Home;