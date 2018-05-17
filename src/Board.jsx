import React from "react";
import Note from "./Note";
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            notes : []
        }
    }
    add = (text) =>{
        this.setState(prevState => ({
            notes : [
                ...prevState.notes ,
                {
                    id : this.nextId() ,
                    note : text
                }
            ]
        }))
    }
    
    nextId = () =>{
        this.uniqueId=this.uniqueId || 0;
        return this.uniqueId ++ ;  
    }
    
    update = (newText,i) =>{
        console.log("Updating" + newText + "" + i);
        this.setState(prevState => ({
            notes : prevState.notes.map(
                note => (note.id !==i )? note : {...note,note:newText}
            )       
        }))
    }
    remove = (id) =>{
        this.setState(prevState =>({
            notes : prevState.notes.filter(note => note.id!==id)
        }))
    }

    eachNote = (note,i) =>{
        return(
            <Note
                key = {i}
                index = {i}
                onChange = {this.update} 
                onRemove = {this.remove}
                >
                {note.note}
            </Note>    
        )
    }



    render(){
        return(
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button id="add" onClick={this.add.bind(null,"New Note")}><FaPlus /> </button>
            </div>
        )
    }
}

export default Board;