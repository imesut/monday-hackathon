import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css"
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js"

const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners

    monday.api(`query { me { name } }`).then((res) => {
      this.setState({ name: res.data.me.name });
      console.log(res.data.me.name)
    });

  }

  render() {

    let text = "Let's start building your amazing app, which will change the world! " + this.state.name

    return <div className="App">
      <AttentionBox
        title="Hello Monday Apps!"
        text={text}
        type="success"
      />
    </div>;
  }
}

export default App;
