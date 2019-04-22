import React, { Component } from 'react';

import TodoList from './Components/TodoList';
import TSwitcher from './Components/ThemeSwitcher';

import * as Themes from './Styles/Themes';
import ThemeContext from './Styles/Themes/context';

class App extends Component {
  state = {
    theme: Themes.Dark
  };

  toggleTheme = () => {
    this.setState({ 
      theme: this.state.theme === Themes.Dark ? Themes.Light : Themes.Dark 
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state} >
          <TSwitcher toggleTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {theme => (<TodoList theme={theme} /> 
            )}
          </ThemeContext.Consumer>
        </ ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
