import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(post => (
          <div style={{ textAlign: `justify`, marginBottom: `2rem` }}>
            <h4>
              {post.id} | {post.titulo}
            </h4>
            <h6>{post.autor}</h6>
            <div>{post.texto}</div>
          </div>
        ))}
      </div>
    );
  }
}

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div></div>;
  }
}

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: false,
      reqType: "getAll"
    };
    this.url = "http://localhost:4321/api/blog";
    this.reqTypes = {
      getAll: "getAll",
      get: "get",
      post: "post",
      put: "put",
      delete: "delete"
    };
  }

  getAll() {
    this.setState({
      loading: true
    });
    axios
      .get(this.url)
      .then(response => {
        this.setState({
          list: response.data,
          loading: false
        });
      })
      .catch(err => console.error(err));
  }

  get() {}

  componentDidMount() {
    this.getAll();
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;
    switch (this.state.reqType) {
      case this.reqTypes.getAll:
        return <PostList list={this.state.list} />;
      default:
        return <div>No data available</div>;
    }
  }
}
