import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(post => (
          <div>
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Author: {post.author}</p>
            <div>{post.texto}</div>
          </div>
        ))}
      </div>
    );
  }
}

export class Post extends Component {
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
    }
    return <div></div>;
  }
}
