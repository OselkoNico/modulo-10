import React from "react";

const withModal = (Component) => {
    class ComponentWithModal extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                showModal: false,
                text: ''
            }
            this.handleToggleModal = this.handleToggleModal.bind(this);
            this.setText = this.setText.bind(this);
        }
        handleToggleModal() {
            this.setState(prevState => ({
                showModal: !prevState.showModal
            }));
        }
        setText(text) {
            this.setState({text: text})
        }
        render(){
            //Dentro del método render()
            const { setText, handleToggleModal, ...restOfProps } = this.props;

            return(
                <>
                {/* ... (código del modal) ... */}
                    <Component
                    setText={this.setText} //Pasamos las funciones del estado interno
                    handleToggleModal={this.handleToggleModal} //Pasamos las funciones del estado interno
                    {...restOfProps} //Solo pasamos las propiedades restantes (sin conflicto)
                    />
                </>
            );
            }
        }
        return ComponentWithModal;
    }

export default withModal;