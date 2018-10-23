import React, { Component } from 'react';

class AmountBox extends Component {
    render() {
        return (
            <div class="row">
                <aside class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Credit</h5>
                        <p class="card-text">0</p>
                        </div>
                    </div>
                </aside>
                <aside class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Credit</h5>
                        <p class="card-text">0</p>
                    </div>
                    </div>
                </aside>
                <aside class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Balance</h5>
                        <p class="card-text">0</p>
                    </div>
                    </div>
                </aside>
            </div>
        );
    }
}
export default AmountBox;