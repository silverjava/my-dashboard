import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Layout, Header, HeaderRow, Content, Icon } from 'react-mdl'
import StackPanel from '../StackPanel'

class Dashboard extends Component {
    render() {
        return (
            <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
                <Layout fixedHeader>
                    <Header>
                        <HeaderRow>
                            <Icon name="wifi" />
                            <h4 style={{marginLeft: '10px', marginTop: '20px', display: 'flex !important'}}>AEM Dashboard</h4>
                        </HeaderRow>
                    </Header>
                    <Content>
                        <StackPanel title="UAT" />
                        <StackPanel title="Prod" />
                    </Content>
                </Layout>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        aemstacks: state.aemstacks
    }
}

export default connect(
    mapStateToProps
)(Dashboard)
