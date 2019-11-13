import React, { Component } from "react";
import Exercise3 from './Exercise3'
import Checkbox from "@material-ui/core/Checkbox";

class Exercise2 extends Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    disableB: false
  };

  handleChange = name => {
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.checkedA}
          onChange={() => this.handleChange("checkedA")}
          value={this.state.checkedA}
        />

        <Checkbox
          checked={this.state.checkedB}
          onChange={() => this.handleChange("checkedB")}
          value={this.state.checkedB}
          color="primary"
          disabled={!this.state.checkedA}
        />

        <Checkbox value={this.state.checkedC} />

        <Checkbox disabled value={this.state.checkedD} />

        <Checkbox disabled checked value={this.state.checkedE} />
        <Checkbox
          checked={this.state.checkedF}
          onChange={() => this.handleChange("checkedF")}
          value={this.state.checkedF}
          indeterminate
        />
        <Checkbox defaultChecked color="default" value={this.state.checkedG} />
        <br/>
        {this.state.checkedA ? <Exercise3 />: null}
      </div>
    );
  }
}

export default Exercise2;
