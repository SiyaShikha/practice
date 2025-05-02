const { Component, createElement } = React;
const { createRoot } = ReactDOM;

class List extends Component {
  constructor(props) {
    super(props);
    // this.state = { items: props.items };
  }

  render() {
    return createElement('ul', null,
      this.props.items.map((item, index) => {
        return createElement('li', { key: index }, item)
      }));
  }
}

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', items: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    const { value, items } = this.state;

    if (value === '') {
      return;
    }
    this.setState({
      items: [...items, value],
      value: ''
    });
  }

  #createInput() {
    return createElement('input', {
      type: 'text',
      placeholder: 'Enter Todo',
      value: this.state.value,
      onChange: this.handleChange
    });
  }

  #createAddBtn() {
    return createElement('button', {
      onClick: this.handleSubmit
    }, 'Add');
  }

  render() {
    const input = this.#createInput();
    const btn = this.#createAddBtn();
    const list = createElement(List, { items: this.state.items });

    return createElement('div', null, input, ' ', btn, list);
  }
}

const container = document.getElementById('main_container');
const root = createRoot(container);
root.render(createElement(Todo));