import React from 'react';
import axios from 'axios';

// const cardWidth = {
//     maxWidth: '15rem'
// }

export default class Qdata extends React.Component{
constructor(){
    super()
    this.state = {
        quotes:[]
     }
}

componentDidMount(){

    axios.get('http://localhost:8080/weebsdb/quotes')
    .then(res => {
        const quotes = res.data.map(quotes=>  
            <div key={quotes._id}>
                <div className="card">
                <div className="card-body">
                    <h3 className="card-text">{quotes.quote}</h3>
                    <hr className="my-2" />
                    <h5 className="card-text">{quotes.figure}</h5>
                </div>
                </div>
            </div>)

            this.setState({quotes})
            console.log("state", this.state.quotes)    
    })
}

render(){
    return(
        <div className='container'>
        <div className='row justify-content-center'>
        {this.state.quotes}
        </div>
        </div>
       
    )}
}



// export default class Qdata extends React.Component {
//     state ={
//         isLoading:true,
//         quotes:[],
//         error: null
//     };

//     fetchQuote(){
//         fetch('http://localhost:8000/weebsdb/quotes')
//         .then(response=> response.json())
//         .then((data)=>{
//             this.setState({
//                 quotes: data,
//                 isLoading: false
//             })
//             console.log(data);
//         })
//         .catch(error=> this.setState({error, isLoading: false}))
//     }

//     componentDidMount(){
//         this.fetchQuote()
//     }


//     render(){
//         const {isLoading, quotes, error} = this.state
//         return (
//           <React.Fragment>
//           {error ? <p>{error.message}</p> : null}
//           {!isLoading ?(
//            quotes.map(quotee=>{
//                const{_id, quote, figure } = quotee
//             return(
//             <div className='container'>
//             <div className='row'>
//             <div className='col-sm'>
//             <div key={_id}>
//             <div className="card text-white bg-dark mr-2 ml-2 mb-3" style={cardWidth}>
//             <div className="card-body">
//             <p className="card-text">{quote}</p>
//             <h5 className="card-text">{figure}</h5> 
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             )
//            })   
//           ):(<h3>Loading ...</h3>)}
//           </React.Fragment>
//         )
//     }
// }