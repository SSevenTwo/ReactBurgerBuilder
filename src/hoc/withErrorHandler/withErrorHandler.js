import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import ReactAux from "../ReactAux";

const withErrorHandler = (WrappedComponent, axios) => {
  // Anon class
  return class extends Component {
    state = {
      showErrorMessage: null,
    };

    // This can be in constructor too as this method may be deprecated
    // We want to instantiate the interceptors before the child components render
    // as if we did it after, it won't catch child errors
    UNSAFE_componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((request) => {
        this.setState({ showErrorMessage: null });
        return request;
      });

      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ showErrorMessage: error });
        }
      );
    }

    // This is so we don't have multiple of the same interceptor
    // Like a destructor
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ showErrorMessage: null });
    };

    render() {
      return (
        <ReactAux>
          <Modal show={this.state.showErrorMessage} cancelModal={this.errorConfirmedHandler}>
            {this.state.showErrorMessage ? this.state.showErrorMessage.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </ReactAux>
      );
    }
  };
};

export default withErrorHandler;
