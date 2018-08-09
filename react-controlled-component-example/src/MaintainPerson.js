import React, { Component } from 'react';

class MaintainPerson extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }
    render() {
        return (
            <section>
                <h1>Maintaining a Person</h1>
                <form onSubmit={this.updatePerson} >

                    <div className="form-group">
                        <label>First</label>
                        <input onChange={this.handleChange} value={this.state.first} name="first" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Last</label>
                        <input onChange={this.handleChange} value={this.state.last} name="last" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>SSN</label>
                        <input onChange={this.handleChange} value={this.state.ssn} name="ssn" className="form-control" />
                    </div>

                    <input type="submit" className="btn btn-danger" />
                </form>
            </section>
        )
    }
}

export default MaintainPerson;
