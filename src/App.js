import React, { Component } from 'react';
import './App.css';

class App extends Component {

  login = () => {
    window.FB.login(data => {

      console.log("data: ", data);
    }, { scope: 'email, manage_pages, pages_show_list, publish_pages, read_page_mailboxes, pages_messaging, public_profile', return_scopes: true })
  }

  logout = () => {

    window.FB.logout( data => {
      console.log("logout: ", data);
    }, error => {
      console.log("error: ", error);
    })
  }

  componentDidMount() {

    // window.FB.getLoginStatus( data => {
    //   console.log("login status: ", data);
    // })
    if(window.FB) {
      console.log("load ok: ");
    } else {
      console.log("haven't loaded yet");
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <i onClick={this.logout} className="fa fa-navicon toggle-btn"></i>
            <div className="col-xs-12" style={{marginLeft: "30px"}}>
              <a className="btn btn-social btn-facebook" onClick={this.login} style={{"backgroundColor": "#3b5998", color: "white"}}>
                <i className="fa fa-facebook" style={{'paddingRight': '10px', 'borderRight': '1px solid rgba(0,0,0,.2)'}}></i>
                <span>Tò Tí Te Te Te</span>
              </a>
            </div>
          </div>
        </nav>

        <div className="full-height border-top" style={{top:'56px'}}>
          <div className="container full-height" style={{width: "100%", padding: 0}}>
            <div className="row full-height">
              <div className="col-md-4 col-lg-4 col-sm-4 row" style={{height: '100%', position: 'relative'}}>
                <div className="col-md-2 col-lg-2 col-sm-2 col-xs-2 border-right" style={{
                  height: '100%', borderRight: '1px solid #e7e7e7',
                  background: '#f3f3f3', padding: '0 7px', textAlign: 'center'
                }}>
                    <a style={{
                      marginTop: '5px', display: 'block'
                    }}>
                      <img src="//graph.facebook.com/649128068789611/picture?width=120&height=120" alt="" style={{
                        borderRadius: '50%', width: '100%'
                      }}/>
                    </a>
                    <a style={{marginTop: '20px', display: 'block'}}>
                      <i className="fa fa-plus fa-2x"></i>
                    </a>
                </div>
                <div className="col-md-10 col-lg-10 col-sm-10 col-xs-10 border-right" style={{height: '100%', padding: 0}}>
                  <div className="message-category border-bottom">
                    <div className="border-right" style={{
                      backgroundColor: 'white', width: '20%', height: '56px', textAlign: 'center',
                      paddingTop: '13px', border: '1px solid white'
                    }}>
                      <i className="fa fa-inbox fa-2x"></i>
                    </div>
                    <div style={{
                      width: '20%', height: '56px', textAlign: 'center',
                      paddingTop: '13px'
                    }}>
                      <i className="fa fa-envelope-o fa-2x"></i>
                    </div>
                    <div style={{
                      width: '20%', height: '56px',textAlign: 'center',
                      paddingTop: '13px'
                    }}>
                      <i className="fa fa-envelope-o fa-2x"></i>
                    </div>
                    <div style={{
                      width: '20%', height: '56px',textAlign: 'center',
                      paddingTop: '13px'
                    }}>
                      <i className="fa fa-envelope-o fa-2x"></i>
                    </div>
                    <div style={{
                      width: '20%', height: '56px',textAlign: 'center',
                      paddingTop: '13px'
                    }}>
                      <i className="fa fa-envelope-o fa-2x"></i>
                    </div>
                  </div>
                  <div className="search-bar border-bottom">
                    <div style={{fontSize: "10px"}}>
                        <i className="fa fa-search fa-2x"></i>
                        <input type="text"/>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-8" style={{height: '100%'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
