if ( !process.env.CLERK_ISSUE_URL ) {
    throw new Error("Missing Clerk Issue URL");
}

const authConfig = {
    providers: [
        {
            domain: process.env.CLERK_ISSUE_URL,
            applicationID: "convex",
        },
    ],
};

export default authConfig;