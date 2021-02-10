import React, { Component } from "react";
import SearchForm from "../components/SearchForm/index";
import SearchResults from "../components/SearchResult/index";
import Navbar from "../components/SearchResult/index";

class SearchResults extends Component {
  state = {
    search: "",
    results: [],
  };

  // When this component mounts, search the book
  componentDidMount() {
    this.searchBooks("title");
  }

  search = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [title]: value,
    });
  };

  // When the form is submitted, search the book for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <div>
        <Navbar />
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResult results={this.state.results} />
      </div>
    );
  }
}

export default SearchResults;
