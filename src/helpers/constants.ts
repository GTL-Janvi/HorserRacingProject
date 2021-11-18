// Notification Constant
export const NotificationState: NotificationTypes = {
    SUCCESS: "success",
    INFO: "info",
    WARNING: "warning",
    ERROR: "error"
}

// Notification Type
export interface NotificationTypes {
    SUCCESS: string,
    INFO: string,
    WARNING: string,
    ERROR: string
}

// Event Type Constants
export const EVENT_TYPE = {
    START: "start",
    FINISH: "finish",
};

// Horse Column Constant
export const HORSE_TABLE_COLUMN = {
    NO: "No",
    HORSE: "Horse",
    TIME: "Time",
};

// Format time to seconds string value (15,6s)
export const formatTime = (time: number | null): string | 0 | null => {
    const formattedTime = time && `${(time / 1000).toFixed(1)}`.split(".").join(",");
    return formattedTime && `${formattedTime}s`;
};

// Event message text
export const EVENT_MSG = {
    COMPLETE: "The Race has completed. Next Race will begin in a while...",
    PENDING: "Please wait, Race is about to start ..."
}

export const SUBMIT = "Submit"

export const LOGINFORMMSGS = {
    EMAIL: "Please input your email!",
    PASSWORD: "Please input your password!"
}

export const ROUTESNAME = {
    LOGIN : {
        NAME: "Login", PATH: "/login"
    },
    RACE: {
        NAME: "Race detail", PATH: "/race"
    }
}

export const LOGINFORMLABEL = {
    EMAIL: "Email",
    PASSWORD: "Password"
}

export const LOGINFORMNAME = {
    EMAIL: "email",
    PASSWORD: "password"
}

export const APIENDPOINT = {
    AUTH: "/auth",
    RESULT: "/results"
}

export const RESPONSESTATUS = {
    NOCONTENT: 204,
    SUCCESS: 200,
    UNAUTHORIZED: 401
}

export const PAGENOTFOUNDMSG = "Page Not Found!!!"

export const BACKTOLOGIN = "Back to Login"