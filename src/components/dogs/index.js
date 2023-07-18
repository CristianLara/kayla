import React from "react";
import "./Dogs.css"
import LoadingSpinner from "../loadingSpinner";

const DOG_API = "https://dog.ceo/api/breeds/image/random";

export default class Dogs extends React.Component {
    constructor() {
        super();
        this.state = { imgLink: null };
    }

    componentDidMount() {
        this.getDogs();
    }

    getDogs = () => {
        this.setState(({ imgLink }) => ({
            imgLink: null
        }));

        fetch(DOG_API)
            .then(data => data.json())
            .then(dog => {
                console.log(dog);
                this.setState(({ imgLink }) => ({
                    imgLink: dog.message
                }));
                console.log(this.state.imgLink);
            })

    }

    render() {
        const { imgLink } = this.state;
        return (
            <div>
                <div className='doggy'>
                    {imgLink ? <img src={imgLink} alt='doggy' /> : <LoadingSpinner />}
                </div>
                <div className='btns'>
                    <button className='btn' onClick={this.getDogs}>
                        Woff
                    </button>
                </div>
            </div>
        )
    }
}
