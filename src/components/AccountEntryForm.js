import React, { Component } from 'react';
import './Style.css';
import uuidv4 from 'uuid/v4';

class AccountEntryForm extends Component {

    createRecordClicked = () => {
        let newEntry = {
            id: uuidv4(),
            date: this.date.value,
            title: this.title.value,
            amount: this.amount.value
        }

        this.date.value = "";
        this.title.value = "";
        this.amount.value = "";
        this.date.focus();

        this.props.recordCreateHandler(newEntry);
    }

    render() {
        return (
            <div class="center-block form-inline account-entry-form">
                <div class="form-group">
                    <input class="form-control" ref={(date)=>this.date=date}/>
                </div>
                <div class="form-group">
                    <input class="form-control" ref={(title)=>this.title=title}/>
                </div>
                <div class="form-group">
                    <input class="form-control" ref={(amount)=>this.amount=amount}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.createRecordClicked}>Create  Record</button>
            </div>
        );
    }
}
export default AccountEntryForm;