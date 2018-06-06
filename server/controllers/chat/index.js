const router = require('express').Router();

router.get('/', require('./getAllConversations'));
router.get('/:conversationId', require('./getConversation'));
router.post('/:conversationId', require('./sendMessage'));
router.post('/new/:recipientId', require('./newConversation'));

module.exports = router;