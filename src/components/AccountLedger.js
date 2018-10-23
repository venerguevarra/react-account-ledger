import React from 'react';

class  AccountLedger extends React.Component {

    editRecordClicked = (id) => {
        this.props.recordEditHandler(id);
    }

    deleteRecordClicked = (id) => {
        this.props.recordDeleteHandler(id);
    }

    render() {
        const entries = this.props.entries.map((entry) => {
            return (

                <tr key={entry.id}>
                    <td>{entry.date}</td>
                    <td>{entry.title}</td>
                    <td>{entry.amount}</td>
                    <td>
                        <button
                            type="submit" class="btn btn-primary"
                            onClick={()=>this.editRecordClicked(entry.id)}>Edit</button>&nbsp;
                        <button
                            type="submit" class="btn btn-danger"
                            onClick={()=>this.deleteRecordClicked(entry.id)}>Delete</button>
                    </td>
                </tr>

            );
        });

        return (

            <table class="ledger table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Title</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {entries}
                </tbody>
            </table>
        )
    }
}
export default AccountLedger;