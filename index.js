//module.exports=require('./dist/js/sdk.min');
let codemirrorSDK;
if (typeof exports === "object") {
    console.log("exports");
    // CommonJS
    codemirrorSDK = require('./dist/js/sdk.min').OnlineProgramming;
    module.exports = exports = codemirrorSDK;
};

codemirrorSDK = require('./dist/js/sdk.min').OnlineProgramming;
export { codemirrorSDK }