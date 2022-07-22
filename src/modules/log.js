var log = {
    info: function (info) { 
        console.log('Info: ' + info);
    },
    debug: function (debug) { 
        console.log(debug);
    },
    warning:function (warning) { 
        console.log('Warning: ' + warning);
    },
    error:function (error) { 
        console.log('Error: ' + error);
        console.log('Error stack: ' + error.stack);
    }
};

module.exports = log