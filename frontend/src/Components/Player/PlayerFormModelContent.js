import axios from 'axios';
import React,{Component, createRef} from 'react';

class PlayerFormModelContent extends Component {
    constructor(props){
        super(props)

        this.firstNameRef = createRef()
        this.lastNameRef = createRef()
        this.emailRef = createRef()
        this.phoneRef = createRef()

        console.log('created')
    }
    submitPlayer(event){
        event.preventDefault()
        const url = 'http://localhost:4000/players'
        axios.post(url, {
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            phone: this.phoneRef.current.value,
            email: this.emailRef.current.value,
        })
        .then((res)=>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    render() { 
        return (
            <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                <div className="modal-content">
                    <h4>Add new Player</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref={this.firstNameRef} type="text"/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref={this.lastNameRef} type="text"/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" ref={this.emailRef} type="text"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="phone" ref={this.phoneRef} type="text"/>
                            <label htmlFor="phone">Phone</label>
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="modal-close btn-flat waves-effect waves-light">
                        Close
                    </button>
                    <button className="modal-close btn-flat waves-effect waves-light">
                        Edit player
                    </button>
                    <button className="modal-close btn waves-effect waves-light" type="submit" name="action">
                        Add player
                    </button>
                </div>
            </form>
        );
    }
}
 
export default PlayerFormModelContent;