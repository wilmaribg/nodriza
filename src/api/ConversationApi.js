'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'conversation'

export class Conversation extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
}
