module.exports = function abcd (Callback, CallBackOnly) {
    var CurrentLogCount = 1

    return (LogMessage) => {
        const Message = `LOG: ${CurrentLogCount}; LOGMESSAGE: ${LogMessage || "no log message"}`
        switch(Callback) {
            case undefined: // Likely one
                console.log(Message);
                break;
            case Callback:
                switch(CallBackOnly) {
                    case true:
                        Callback(Message);
                        break;
                    case false: 
                        console.log(Message);
                        Callback(Message);
                        break;
                    default: // equivalent to true
                        console.log(Message);
                        Callback(Message);
                        break;
                }

        }

        CurrentLogCount += 1
    }

}