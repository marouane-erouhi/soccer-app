import react, {Component} from 'react'
import M from "materialize-css";

class Modal extends Component {
  constructor(props){
    super(props)
  }
    componentDidMount() {
      const options = {
        onOpenStart: () => {
          console.log("Open Start");
        },
        onOpenEnd: () => {
          console.log("Open End");
        },
        onCloseStart: () => {
          console.log("Close Start");
        },
        onCloseEnd: () => {
          console.log("Close End");
        },
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: false,
        startingTop: "4%",
        endingTop: "10%"
      };
      M.Modal.init(this.Modal, options);
  
      // let instance = M.Modal.getInstance(this.Modal);
      // instance.open();
      // instance.close();
      // instance.destroy();
    }
  
    render() {
      return (
        <div ref={Modal => this.Modal = Modal} id={this.props.triggerName} className="modal">
          {this.props.content}

          {/* <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">Disagree</a>
            <a className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div> */}
        </div>
      );
    }
  }

  export default Modal