import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(event) {
    event.preventDefault();

    const term = this.refs.Search.value;
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">

          <form className="pull-right input-group" onSubmit={this.onSearchSubmit}>
            <input
              ref="Search"
              type="text"
              placeholder="Search..."
              className="form-control"
            />

            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Go</button>
            </span>
          </form>

        </div>
      </div>
    );
  }
}

export default Search;
