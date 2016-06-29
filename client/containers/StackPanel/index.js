import React, { Component } from 'react'
import { Card, CardText, CardTitle, DataTable, TableHeader } from 'react-mdl'

class StackPanel extends Component {
    render() {
        return (
            <Card style={{ width: '80%', margin: 'auto', marginTop: '40px' }}>
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>
                    <DataTable
                        style={{width: '100%'}}
                        shadow={0}
                        rows={[
                            { author: 'xxx.xxx.xxx.xxx', publish: 'xxx.xxx.xxx.xxx', dispatcher: 'xxx.xxx.xxx.xxx' },
                            { author: '',                publish: 'xxx.xxx.xxx.xxx', dispatcher: 'xxx.xxx.xxx.xxx' },
                            { author: '',                publish: 'xxx.xxx.xxx.xxx', dispatcher: '' }
                        ]}
                        >
                        <TableHeader name="author" tooltip="author in uat">Author</TableHeader>
                        <TableHeader name="publish" tooltip="publish in uat">Publish</TableHeader>
                        <TableHeader name="dispatcher" tooltip="dispatcher in uat">Dispatcher</TableHeader>
                    </DataTable>

                </CardText>
            </Card>
        )
    }
}

export default StackPanel
