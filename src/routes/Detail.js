import React from 'react';
import './Detail.css';
import star from'./star.jpg';

class Detail extends React.Component{
    componentDidMount(){
        const {location,history} = this.props;

        if (location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const {location} = this.props;


        if(location.state){
            return (
                <div className="detail">
                <h1>{location.state.title}</h1>
                <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                <h3>Year : {location.state.year}</h3>
                
                <h3>{location.state.rating}</h3>
                <h3>genres</h3>
                <ul>
                    {location.state.genres.map((genre,index)=>{
                        return<li key={index}>{genre}</li>
                    })}
                </ul>
                <p>{location.state.summary}</p>

                </div>
            );
        } else {
            return null;
        }
    }
}
export default Detail;