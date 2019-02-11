import React, {Component} from 'react';

export default class messageForm extends Component {
  constructor(){
    super();
    this.state={
        text: '',
        category: '',
        image: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // constructor code
  }
  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state);
  }

render () {
    return (
      <div className="row container fluid mt-5 ml-5 ">
        <div className="col-md-12 center-block ">
          <h4>Ingreso de mensaje</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <label htmlFor="messageText">Texto del mensaje</label>
                  <textarea
                    id="messageText"
                    type="text"
                    name="messageText"
                    value={this.state.text}
                    placeholder="Ingresa el mensaje"
                    ref={inputMessageText => this.messageText = inputMessageText}
                    onChange={e => this.setState({text: e.target.value})}
                    className="form-control"
                    rows="3"
                     />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label htmlFor="imgUpload">Subir imagen</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="imgUpload"
                  onChange={e => this.setState({image:e.target.value})}  
                  />
              </div>
                  <button className="btn btn-primary" >Enviar</button>
            </form>
          </div>
      </div>
    );
  }
}
