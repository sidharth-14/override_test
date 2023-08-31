import * as github from '@actions/github';
import * as core from '@actions/core';

const discussionBody = github.context.payload.discussion.body;
const lines = discussionBody.split('\n');

let overridestatus = '';

if (!lines[0].toLowerCase().includes('override')) {
    overridestatus = 'absent';
} else {
  overridestatus = 'present';
}
core.setoutput('override_status',overridestatus)