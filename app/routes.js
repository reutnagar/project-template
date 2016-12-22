const express      = require('express'),
  router           = express.Router(),
  mainController   = require('./controllers/main.controller'),
  itemsController = require('./controllers/item.controller');
var path = require('path');

router.use(express.static(path.join(__dirname , '../public/view/admin')));
router.use(express.static(path.join(__dirname , '../public/view/client')));

// export router
module.exports = router;
  
  // main routes
router.get('/client', mainController.showHome);
router.get('/admin', mainController.showHomeAdmin);
router.get('*', function(req,res){
    res.sendFile(path.join(__dirname , '../public','view/admin/index.html'));
});