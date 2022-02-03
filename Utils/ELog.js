// ELog or ExtraLog

modules.exports = (LogName, Callback, CallbackOnly) => {
    var CurrentLog = 1;
    return (LogMessage) => {
        const Message = `(${LogName || ""}) LOG: ${CurrentLog}; MESSAGE: ${LogMessage || "Message not defined"}`;
        switch(Callback) {
            case undefined || null : 
                console.log(Message);
                break;
            default:
                switch(CallbackOnly) {
                    case undefined || true :
                        Callback(Message);
                        break;
                    default: // false
                        Callback(Message);
                        console.log(Message);
                        break;
                }
                break;
        }
        CurrentLog += 1
    }
}