import React, { Component } from "react";
import { axios } from "axios";

export default class PeopleMnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modo: "list",
      listado: [],
      element: null,
      loading: true
    };
    this.originalId = null;
    this.url = "http://localhost:4321/api/personas";
  }

  list() {
    this.setState({ loading: true });
    axios
      .get(this.url)
      .then(resp => {
        this.setState({
          modo: "list",
          listado: resp.data,
          loading: false
        });
      })
      .catch(err => console.error(err));
  }

  edit(key) {
    this.setState({ loading: true });
    axios
      .get(this.url + `/${key}`)
      .then(resp => {
        this.setState({
          modo: "edit",
          listado: resp.data,
          loading: false
        });
        this.originalId = key;
      })
      .catch(err => console.error(err));
  }

  view(key) {
    this.setState({ loading: true });
    axios
      .get(this.url + `/${key}`)
      .then(resp => {
        this.setState({
          modo: "view",
          listado: resp.data,
          loading: false
        });
      })
      .catch(err => console.error(err));
  }

  delete(key) {
    this.setState({ loading: true });
    axios
      .delete(this.url + `/${key}`)
      .then(() => this.list())
      .catch(err => console.error(err));
  }

  cancel() {
    this.list();
  }

  send(element) {
    switch (this.state.modo) {
      case "add":
        axios
          .post(this.url, element)
          .then(() => this.list())
          .catch(err => console.error(err));
        break;
    }
  }

  componentDidMount() {
    this.list();
  }
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return <div>People maintenance</div>;
  }
}

export class PeopleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: props.element,
      invalid: false,
      msgErr: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(prev => {
      prev.element[event.target.name] = event.target.value;
      return { element: prev.element };
    });
    this.validateForm();
  }

  validateForm() {}

  render() {
    return (
      <form
        ref={tag => {
          this.form = tag;
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={this.state.element.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={this.state.element.lastname}
            onChange={this.handleChange}
          />
        </div>
        {this.state.element.name} {this.state.element.lastname}
        <button disabled={this.state.invalid}></button>
      </form>
    );
  }
}
