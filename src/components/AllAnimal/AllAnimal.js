import React from "react";
import API from "../../API/api";
export default class MyForm extends React.Component {
  myInput = React.createRef();
  state = { animals: [] };
  onAnimalsClick = async () => {
    const response = await API.get("/animals");
    console.log(response.data.animals);
    let animals = response.data.animals.map(animal => {
      return (
        <li key={animal._id} className="list-group-item">
          <span>Name: </span>
          <h3>{animal.name}</h3>
          <span id={animal._id} className="float-right">
            <button
              onClick={this.onDeleteClick}
              className="btn btn-danger mr-2"
            >
              delete
            </button>
            <input
              id={animal._id + "update"}
              ref={this.myInput}
              className="form-control d-inline"
            />
            <button onClick={this.onUpdateClick} className="btn btn-secondary">
              update
            </button>
          </span>
        </li>
      );
    });
    this.setState({ animals });
  };
  onDeleteClick = async e => {
    const response = await API.delete("/delete", {
      params: { animalId: e.target.parentNode.id }
    });
    console.log(response);
    this.onAnimalsClick();
  };
  onUpdateClick = async e => {
    const response = await API.get("/update", {
      params: {
        animalId: e.target.parentNode.id,
        newName: document.getElementById(e.target.parentNode.id + "update")
          .value
      }
    });
    console.log(response);
    this.onAnimalsClick();
  };
  render() {
    return (
      <div
        style={{
          top: "50%",
          left: "5%",
          right: "5%",
          height: "50%",
          overflow: "auto"
        }}
        className="position-absolute bg-warning rounded p-5"
      >
        <div className="d-flex justify-content-center">
          <button
            onClick={this.onAnimalsClick}
            className="btn btn-primary mb-2"
          >
            get all animal
          </button>
        </div>
        <ul className="list-group">{this.state.animals}</ul>
      </div>
    );
  }
}
