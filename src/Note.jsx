import React from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';


class Note extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editing :false
        }
    }
    
    edit = () =>{
        this.setState({
            editing:true
        })
    }
    remove = () =>{
        this.props.onRemove(this.props.index)
    }
    save = (e) =>{
        e.preventDefault();
        this.props.onChange(this._newText.value,this.props.index);
        this.setState({
            editing:false
        })
    }
    renderForm = () =>{
        return(
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref = {input => this._newText = input}  /> 
                    <button id="save"><FaFloppyO /></button>
                </form>
            </div>
        )
    }

    renderDisplay = () => {
        return(
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPencil/></button>
                    <button onClick={this.remove} id="remove"><FaTrash/></button>
                </span>
            </div>
        )
    }
    render(){
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default Note;