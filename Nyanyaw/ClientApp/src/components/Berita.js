import React, {Component} from "react";

export class Berita extends Component{
    static displayName = Berita.name;
    
    render() {
        return(
            <div className="mt-5">
                <h1 className="text-primary">Hello bro!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet assumenda debitis eos est facilis illo, inventore laboriosam mollitia natus neque odit officia perferendis possimus rem sed sequi vero voluptate.</p>
            </div>
        )
    }
}