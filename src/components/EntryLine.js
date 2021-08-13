import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine({ description, value, isExpense = false }) {
    return (
        <Segment color={isExpense ? 'red' : 'green'}>
            <Grid columns={3} textAlign="right" divided>
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
                    <Grid.Column width={3}>{value}</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit" bordered />
                        <Icon name="trash" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default EntryLine
