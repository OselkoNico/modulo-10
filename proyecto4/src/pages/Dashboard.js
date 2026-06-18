import React, {Component} from "react";
import withModal from "../hocs/withModal";

class Dashboard extends Component {
    componentDidMount(){
        this.props.setText('Lorem ipsum...');
    }
    render(){
        return(
            <div className="container">
                <button onClick={this.props.handleToggleModal}>
                    Ver condiciones
                </button>
            </div>
        )
    }
}

export default withModal(Dashboard);