import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

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
            {theme => (
              <ThemeProvider theme={theme}>
                <TodoList/>               
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
