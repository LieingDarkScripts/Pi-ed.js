// ELog or ExtraLog

module.exports = (LogName, CallBack, CallBackOnly)  => {
    var LogCount = 1

    return (LogMessage) => {
        const Log = `${LogName && `(${LogName}): `}LOG: ${LogCount}; ` +  LogMessage || `undefined`
        LogCount += 1
        switch(CallBack) { 
            case undefined: 
                console.log(Log)
                break
            default: // Existance
                switch(CallBackOnly) {
                    case true:
                    case undefined:
                        return CallBack(Log) 
                    default: // false ? 
                        console.log(Log)
                        return CallBack(Log)
                }
        }

       
    }
}