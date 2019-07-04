import {Search} from 'semantic-ui-react';
import { Form, Radio } from 'semantic-ui-react'

import React from 'react';

export default class Gender extends React.Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
                <Form>
                <Form.Field>
                <Radio
            label='Male'
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
            label='Female'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
                />
                </Form.Field>
                </Form>
        )
    }
}
