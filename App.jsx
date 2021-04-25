import React,{Component} from "react";
import Posts from "./components/Posts";

const posts = [
    {
        id:1,
        name:'React',
        description:'Best UI library'
    },
    {
        id:2,
        name:'Node',
        description:'Server side js'
    }
];


export default class App extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                <Posts posts ={posts}/>
            </div>
        );
    }
}
