const express = require('express');
const users = require('../routes/users');
const caseRecord = require('../routes/CaseRecord')
const summonRecord = require('./../routes/SummonRecord')
const hearing = require('../routes/HearingRecord')
const cause = require('../routes/CauseRecord')


module.exports = function (app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/case', caseRecord);
  app.use('/api/summon', summonRecord);
  app.use('/api/hearing', hearing);
  app.use('/api/cause', cause);



};
